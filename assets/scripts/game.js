/*
Hello and welcome to the cursed wasteland of main.js

CREDITS:
Broman - Efficient Roman Numeral System
Purpmogus - Literally everything else
*/

let BETA_STATUS = true;

let game = {
    settings: {
        darkModeEnabled: true
    },
    userData: {
        coins: {
            amount: BigNumber('0'),
            perClick: BigNumber('1'),
            perSecond: BigNumber('0')
        },
        characterData: {
            highestCharacterUnlocked: 0,
            upgrades: {
                globalMultiplier: BigNumber('1'),
                clickPercent: BigNumber('0')
            }
        },
        characters: []
    },
    staticData: gamestaticdata,

    getValue: {
        characterLevelUpCost: function (index) {
            let level = game.userData.characters[index].level;
            let returnValue = BigNumber(game.staticData.characters[index].cost);
            returnValue = returnValue.multipliedBy(BigNumber('1.08').exponentiatedBy(level));

            return returnValue;
        },

        characterUpgradeCost: function (index, order) {
            let orders = ['1', '10', '50', '250', '1000', '5000', '25000', '125000']
            return BigNumber(game.staticData.characters[index].cost).multipliedBy(orders[order]);
        },

        characterCPS: function (index) {
            // check if Helping Hand
            if (index == 0) return BigNumber('0');

            let char = game.userData.characters[index];
            let df = game.staticData.characters[index].df;

            let returnValue = BigNumber(game.staticData.characters[index].cost).dividedBy('100');
            returnValue = returnValue.multipliedBy(BigNumber('0.8').exponentiatedBy(df));
            // Self and global multipliers
            returnValue = returnValue.multipliedBy(game.userData.characterData.upgrades.globalMultiplier);
            returnValue = returnValue.multipliedBy(char.multiplier).integerValue(1);
            // Multiply by level
            returnValue = returnValue.multipliedBy(char.level).integerValue(1);
            return returnValue;
        },

        characterCPC: function (index) {

            let char = game.userData.characters[index];

            let returnValue = BigNumber('1');
            // Self and global multipliers
            returnValue = returnValue.multipliedBy(game.userData.characterData.upgrades.globalMultiplier);
            returnValue = returnValue.multipliedBy(char.multiplier).integerValue(1);
            // Multiply by level
            returnValue = returnValue.multipliedBy(char.level).integerValue(1);

            return returnValue;
        },

        multipliedByIncrease: function (value) {
            increase = BigNumber(value);
            multiplier = BigNumber('1');
            multiplier = multiplier.plus(increase.multipliedBy('0.01'));
            return multiplier;
        },

        coins: {
            perSecond: function () {
                returnValue = BigNumber('0');

                for (i = 0; i < game.staticData.characters.length; i++) {
                    returnValue = returnValue.plus(game.getValue.characterCPS(i));
                }

                return returnValue;
            },

            perClick: function () {
                returnValue = BigNumber('1');
                returnValue = returnValue.plus(game.getValue.characterCPC(0));
                returnValue = returnValue.plus(game.userData.coins.perSecond.multipliedBy(game.userData.characterData.upgrades.clickPercent.multipliedBy('0.01')));
                return returnValue;
            }
        }
    }
}

let events = {
    onButtonClick: function () {
        game.userData.coins.amount = game.userData.coins.amount.plus(game.userData.coins.perClick);
    },

    characters: {
        purchase: function (index) {
            cost = game.getValue.characterLevelUpCost(index)
            if (game.userData.coins.amount.isGreaterThanOrEqualTo(cost)) {
                game.userData.coins.amount = game.userData.coins.amount.minus(cost);
                game.userData.characters[index].level++;

                display.update.upgrades.characters.single(index);
            }
        },

        purchaseUpgrade: function (char, up) {
            char_d = game.staticData.characters[char];
            data = game.userData.characters[char];
            cost = game.getValue.characterUpgradeCost(char, char_d.upgrades[up].order);

            if (game.userData.coins.amount.isGreaterThanOrEqualTo(cost) && data.level >= char_d.upgrades[up].level) {
                game.userData.coins.amount = game.userData.coins.amount.minus(cost);

                data.upgrades[up].unlocked = true;

                // type of upgrade
                switch (char_d.upgrades[up].type) {
                    case "selfBoost":
                        game.userData.characters[char].multiplier = data.multiplier.multipliedBy(game.getValue.multipliedByIncrease(char_d.upgrades[up].amount));
                        break;
                    case "globalBoost":
                        game.userData.characterData.upgrades.globalMultiplier = game.userData.characterData.upgrades.globalMultiplier.multipliedBy(game.getValue.multipliedByIncrease(char_d.upgrades[up].amount));
                        // update all character text
                        for (c = 0; c < game.staticData.characters.length; c++) {
                            if (c >= 1) {
                                document.getElementById("char_" + c + "_cps").innerHTML = utility.number.format(game.getValue.characterCPS(c)) + " CPS"
                            } else { document.getElementById("char_" + c + "_cps").innerHTML = utility.number.format(game.getValue.characterCPC(c)) + " Coins Per Click" }
                        }
                        break;
                    case "clickBoost":
                        game.userData.characterData.upgrades.clickPercent = game.userData.characterData.upgrades.clickPercent.plus(char_d.upgrades[up].amount);
                        console.log("rat")
                        break;
                }
                display.update.upgrades.characters.single(char);
            }
        }
    }
}

let display = {
    tooltip: {
        visible: false,

        show: function () {
            this.visible = true;
        },

        hide: function () {
            this.visible = false;
        },

        showText: function (html) {
            document.getElementById("tooltip_content").innerHTML = html;
            this.show();
        },

        getText: {
            character: function (index) {
                var text = "";

                text += "<h3>" + game.staticData.characters[index].name + "</h3>";
                text += "<p>" + game.staticData.characters[index].description + "</p>";

                return text;
            },

            characterUpgrade: function (char, up) {
                var character = game.staticData.characters[char];
                var upgrade = character.upgrades[up];
                var text = "";

                text += "<h3>" + upgrade.name + "</h3>"
                text += "<p>Requires LVL " + upgrade.level + "<br>Cost: <b>" + utility.number.format(game.getValue.characterUpgradeCost(char, upgrade.order)) + " soul coins</b></p>"
                text += "<p>" + display.tooltip.getText.upgradeDescriptions(char, up) + "</b></p>"
                text += "<p><i>" + upgrade.flavor + "</i></p>"

                return text;
            },

            upgradeDescriptions: function (char, up) {

                var character = game.staticData.characters[char];
                var upgrade = character.upgrades[up];

                var text = ""
                switch (upgrade.type) {
                    case "selfBoost":
                        text = "Increases the effectiveness of <b>$NAME$</b> by <b>$AMOUNT$</b>%."
                        break;
                    case "globalBoost":
                        text = "Increases the effectiveness of all characters by <b>$AMOUNT$%</b>."
                        break;
                    case "clickBoost":
                        text = "Increases your CPC by <b>$AMOUNT$%</b> of your CPS."
                        break;
                    default:
                        text = "Unknown upgrade bonus!"
                        break;
                }

                text = text.replace("$NAME$", character.name).replace("$AMOUNT$", upgrade.amount);
                return text;
            }
        }
    },
    update: {
        all: function () {
            display.update.main();
            display.update.upgrades.characters.all();
        },

        main: function () {
            game.userData.coins.perSecond = game.getValue.coins.perSecond();
            game.userData.coins.perClick = game.getValue.coins.perClick();

            document.getElementById("coinDisplay").innerHTML = utility.number.format(game.userData.coins.amount);
            document.getElementById("cpsDisplay").innerHTML = utility.number.format(game.userData.coins.perSecond);
            document.getElementById("cpcDisplay").innerHTML = utility.number.format(game.userData.coins.perClick);

            if (display.tooltip.visible == false) {
                document.getElementById("tooltip_anchor").style.display = "none";
            } else {
                document.getElementById("tooltip_anchor").style.display = "block";
            }
        },

        upgrades: {
            characters: {
                load: function () {
                    html = "";
                    for (i = 0; i < game.staticData.characters.length; i++) {
                        var char = game.staticData.characters[i];
                        var prefix = "char_" + i;

                        var divId = prefix;
                        var divName = prefix + "_name";
                        var divLevel = prefix + "_level";
                        var divCPS = prefix + "_cps";
                        var divUpgrades = prefix + "_upgrades";
                        var divButton = prefix + "_button";

                        var buttonMouseControl = "onmouseenter=\"display.tooltip.showText(display.tooltip.getText.character(" + i + "))\" onmouseleave=\"display.tooltip.hide()\"";

                        html += "<div id=\"" + divId + "\" class=\"charUpgrade\"><table><td><img style=\"margin-right:20px;\" height=128px width=128px src=\"assets/images/characters/" + char.icon + "\"></image></td><td style=\"width:260px;\"><p id=\"" + divName + "\"><p id=\"" + divLevel + "\"></p><p id=\"" + divCPS + "\"></p></td><td><p id=\"" + divUpgrades + "\" style=\"font-size:15px;font-weight:normal;\"></p></td><button id=\"" + divButton + "\" " + buttonMouseControl + " onclick=\"events.characters.purchase(" + i + ")\" style=\"float:right;\" class=\"upgradeButton\"></button></table></div>";
                    }
                    document.getElementById("characters").innerHTML = html;
                    display.update.upgrades.characters.all();
                },

                setVisibility: function () {
                    for (i = 1; i < game.staticData.characters.length; i++) {
                        if (game.userData.characterData.highestCharacterUnlocked >= i) { document.getElementById("char_" + i).style.display = "block" }
                        else if (game.userData.coins.amount.isGreaterThanOrEqualTo(game.staticData.characters[i - 1].cost)) {
                            document.getElementById("char_" + i).style.display = "block";
                            if (game.userData.characterData.highestCharacterUnlocked < i) game.userData.characterData.highestCharacterUnlocked = i;
                        } else {
                            document.getElementById("char_" + i).style.display = "none";
                        }
                    }
                },

                single: function (index) {
                    var char = game.staticData.characters[index];
                    var data = game.userData.characters[index];

                    var prefix = "char_" + index;

                    var divId = prefix;
                    var divName = prefix + "_name";
                    var divLevel = prefix + "_level";
                    var divCPS = prefix + "_cps";
                    var divUpgrades = prefix + "_upgrades";
                    var divButton = prefix + "_button";

                    var level = game.userData.characters[index].level
                    var baseCost = game.getValue.characterLevelUpCost(index);

                    document.getElementById(divName).innerHTML = game.staticData.characters[index].name;
                    document.getElementById(divLevel).innerHTML = "Lvl " + level;

                    let upgrades = ""
                    for (u = 0; u < char.upgrades.length; u++) {

                        var imageSrc = ""
                        let onClick = ""
                        if (data.upgrades[u].unlocked) {
                            imageSrc = "assets/images/characters/upgrades/unlocked.png";
                        } else {
                            imageSrc = "assets/images/characters/upgrades/" + char.upgrades[u].icon;
                            onClick = "onclick=\"events.characters.purchaseUpgrade(" + char.id + ", " + u + ")\""
                        }

                        upgrades += "<image src=\"" + imageSrc + "\" " + onClick + " height=48px width=48px style=\"margin:4px\" onmouseenter=\"display.tooltip.showText(display.tooltip.getText.characterUpgrade(" + char.id + ", " + u + "))\" onmouseleave=\"display.tooltip.hide()\"></image>"
                    }
                    document.getElementById(divUpgrades).innerHTML = upgrades;

                    if (index >= 1) {
                        document.getElementById(divCPS).innerHTML = utility.number.format(game.getValue.characterCPS(index)) + " CPS"
                    } else { document.getElementById(divCPS).innerHTML = utility.number.format(game.getValue.characterCPC(index)) + " Coins Per Click" }
                    document.getElementById(divButton).innerHTML = "<br>LVL UP<br>" + utility.number.format(baseCost)
                },

                all: function () {
                    for (i = 0; i < game.staticData.characters.length; i++) {
                        display.update.upgrades.characters.single(i);
                    }
                }
            }
        }
    },
    popup: {
        show: function () {
            document.querySelector('.popup-background').style.display = 'flex';
        },

        hide: function () {
            document.querySelector('.popup-background').style.display = 'none';
        },

        display: function (mainText, buttonText, buttonOnClickFunction) {

            const CLOSE_ID = "CLOSE";
            if (buttonOnClickFunction == CLOSE_ID) buttonOnClickFunction = "display.popup.hide()";
            document.getElementById("popup-text").innerHTML = mainText;
            document.getElementById("popup-button").innerHTML = "<b>" + buttonText + "</b>";
            document.getElementById("popup-button").setAttribute("onClick", "javascript: " + buttonOnClickFunction + ";");
            display.popup.show();
        }
    }
}

let utility = {
    calculatePercentOf: function (firstNumber, secondNumber) {
        let a = BigNumber(firstNumber);
        let b = BigNumber(secondNumber);
        let c = a.dividedBy(b);
        let d = c.multipliedBy('100');
        return d;
    },

    randomChanceGenerator: function (chance, max) {
        let roll = Math.random() * max
        return roll <= chance
    },

    number: {
        format: function (numberParam) {
            number = BigNumber(numberParam)
            if (number.isGreaterThanOrEqualTo('1.0e68')) {
                return number.toExponential(3, 1).replace('+', '');
            } else if (number.isLessThan('1000')) {
                return number.integerValue(1).toNumber().toString();
            } else {
                let symbols = ["", "K", "M", "B", "T", "q", "Q", "s", "S", "O", "N", "d", "U", "D", "!", "@", "#", "$", "%", "^", "&", "*"]
                for (sym = 0; number.isGreaterThanOrEqualTo('1000'); sym++) {
                    number = number.dividedBy('1000');
                }
                var outputValue = (number.toNumber() - 0.004).toFixed(2);
                var returnString = outputValue + "" + symbols[sym]

                return returnString;
            }
        }
    },

    romanNumeral: function (number) {
        // Efficient roman numeral generator by broman

        if (number >= 10000) return number;
        var numeral = ''
        var numeralList = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
        var decimalList = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

        for (i in decimalList) {
            while (number >= decimalList[i]) {
                number -= decimalList[i];
                numeral += numeralList[i];
            }
        }
        return numeral;
    }
}

let save = {
    save: {},

    saveGame: function () {
        this.save = game.userData
        this.save.version = 3
        this.save.timestamp = Date.now();

        // IS BETA?
        this.save.isBeta = BETA_STATUS;

        let element = document.createElement('a');
        element.style.display = 'none';
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(JSON.stringify(save.save)));
        element.setAttribute('download', "tccs.txt");
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    },

    loadGame: function () {
        if (save.save.isBeta != BETA_STATUS) {
            display.popup.display("The save could not be imported", "OK", "CLOSE");
        } else {
            game.userData = { ...game.userData, ...save.save }

            // set BigNumbers
            game.userData.coins.amount = BigNumber(game.userData.coins.amount);
            game.userData.characterData.upgrades.clickPercent = BigNumber(game.userData.characterData.upgrades.clickPercent);
            game.userData.characterData.upgrades.globalMultiplier = BigNumber(game.userData.characterData.upgrades.globalMultiplier);

            for (i = 0; i < game.staticData.characters.length; i++) { game.userData.characters[i].multiplier = BigNumber(game.userData.characters[i].multiplier) }

            display.update.all();
        }
    }
}

document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});

document.addEventListener('mousemove', function (e) {
    if (display.tooltip.visible == true) {
        let tooltip = document.getElementById('tooltip_main');
        tooltip.style.left = (e.pageX - 200) + 'px';
        tooltip.style.top = (e.pageY - (tooltip.offsetHeight - 80)) + 'px';
    }
});

const input = document.querySelector('input[type="file"]')
input.addEventListener('change', function (e) {
    const reader = new FileReader();
    reader.onload = function () {
        let readText = reader.result;
        save.save = JSON.parse(readText);
        save.loadGame()
    }
    reader.readAsText(input.files[0]);
});

//setup

for (i = 0; i < game.staticData.characters.length; i++) {
    game.userData.characters[i] = { id: i, level: 0, multiplier: BigNumber('1'), upgrades: [] };
    for (u = 0; u < game.staticData.characters[i].upgrades.length; u++) {
        game.userData.characters[i].upgrades[u] = { unlocked: false };
    }
}

display.update.upgrades.characters.load();
display.update.upgrades.characters.setVisibility();

setInterval(function () {
    display.update.main();
    game.userData.coins.amount = game.userData.coins.amount.plus(game.userData.coins.perSecond.dividedBy('50'));
}, 20);

// check costs for visibility
setInterval(function () {
    display.update.upgrades.characters.setVisibility();
}, 350)