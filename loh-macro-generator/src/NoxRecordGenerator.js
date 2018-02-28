import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import _ from 'lodash';
import List, { ListItem, ListItemText } from 'material-ui/List';
import AppBar from 'material-ui/AppBar';



class NoxRecordGenerator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            classCoordinates: [
                { class: "Knight", XCoord: 494, YCoord: 160 },
                { class: "Warrior", XCoord: 567, YCoord: 160 },
                { class: "Assassin", XCoord: 640, YCoord: 160 },
                { class: "Archer", XCoord: 712, YCoord: 160 },
                { class: "Machinist", XCoord: 791, YCoord: 160 },
                { class: "Wizard", XCoord: 870, YCoord: 160 },
                { class: "Priest", XCoord: 930, YCoord: 160 }
            ],

            heroesCoordinates: [
                { class: "One", XCoord: 405, YCoord: 211 },
                { class: "Two", XCoord: 509, YCoord: 211 },
                { class: "Three", XCoord: 622, YCoord: 211 },
                { class: "Four", XCoord: 718, YCoord: 211 },
                { class: "Five", XCoord: 827, YCoord: 211 },
                { class: "Six", XCoord: 925, YCoord: 211 },
                { class: "Seven", XCoord: 398, YCoord: 326 },
                { class: "Eight", XCoord: 509, YCoord: 320 },
                { class: "Nine", XCoord: 612, YCoord: 322 }
            ],

            heroesMapping: [
                { name: "Phillop", classCoordinates: 0, heroCoordinates: 0 },
                { name: "Clause", classCoordinates: 0, heroCoordinates: 1 },
                { name: "Demia", classCoordinates: 0, heroCoordinates: 2 },
                { name: "Morrah", classCoordinates: 0, heroCoordinates: 3 },
                { name: "Jane", classCoordinates: 0, heroCoordinates: 4 },
                { name: "Ricardo", classCoordinates: 0, heroCoordinates: 5 },
                { name: "Sonia", classCoordinates: 0, heroCoordinates: 6 },

                { name: "Kasel", classCoordinates: 1, heroCoordinates: 0 },
                { name: "Gau", classCoordinates: 1, heroCoordinates: 1 },
                { name: "Naila", classCoordinates: 1, heroCoordinates: 2 },
                { name: "Theo", classCoordinates: 1, heroCoordinates: 3 },
                { name: "Viska", classCoordinates: 1, heroCoordinates: 4 },
                { name: "Priscilla", classCoordinates: 1, heroCoordinates: 5 },
                { name: "Scarlet", classCoordinates: 1, heroCoordinates: 6 },

                { name: "Roi", classCoordinates: 2, heroCoordinates: 0 },
                { name: "Epis", classCoordinates: 2, heroCoordinates: 1 },
                { name: "Reina", classCoordinates: 2, heroCoordinates: 2 },
                { name: "Fluss", classCoordinates: 2, heroCoordinates: 3 },
                { name: "Tanya", classCoordinates: 2, heroCoordinates: 4 },
                { name: "Ezekiel", classCoordinates: 2, heroCoordinates: 5 },
                { name: "Miriane", classCoordinates: 2, heroCoordinates: 6 },
                { name: "Gladi", classCoordinates: 2, heroCoordinates: 7 },

                { name: "Selene", classCoordinates: 3, heroCoordinates: 0 },
                { name: "Dimael", classCoordinates: 3, heroCoordinates: 1 },
                { name: "Luna", classCoordinates: 3, heroCoordinates: 2 },
                { name: "Arch", classCoordinates: 3, heroCoordinates: 3 },
                { name: "Yanne", classCoordinates: 3, heroCoordinates: 4 },
                { name: "Requina", classCoordinates: 3, heroCoordinates: 5 },

                { name: "Lakrak", classCoordinates: 4, heroCoordinates: 0 },
                { name: "Miruru", classCoordinates: 4, heroCoordinates: 1 },
                { name: "Rodina", classCoordinates: 4, heroCoordinates: 2 },
                { name: "Annete", classCoordinates: 4, heroCoordinates: 3 },
                { name: "Mitra", classCoordinates: 4, heroCoordinates: 4 },
                { name: "Oddy", classCoordinates: 4, heroCoordinates: 5 },

                { name: "Cleo", classCoordinates: 5, heroCoordinates: 0 },
                { name: "Maria", classCoordinates: 5, heroCoordinates: 1 },
                { name: "Lorraine", classCoordinates: 5, heroCoordinates: 2 },
                { name: "Pavel", classCoordinates: 5, heroCoordinates: 3 },
                { name: "Aisha", classCoordinates: 5, heroCoordinates: 4 },
                { name: "Lewisia", classCoordinates: 5, heroCoordinates: 5 },
                { name: "Nyx", classCoordinates: 5, heroCoordinates: 6 },
                { name: "Ophelia", classCoordinates: 5, heroCoordinates: 7 },
                { name: "Artemia", classCoordinates: 5, heroCoordinates: 8 },

                { name: "Frey", classCoordinates: 6, heroCoordinates: 0 },
                { name: "Kaulah", classCoordinates: 6, heroCoordinates: 1 },
                { name: "Rephy", classCoordinates: 6, heroCoordinates: 2 },
                { name: "Baudouin", classCoordinates: 6, heroCoordinates: 3 },
                { name: "Leo", classCoordinates: 6, heroCoordinates: 4 },
                { name: "Laias", classCoordinates: 6, heroCoordinates: 5 },
                { name: "Cassandra", classCoordinates: 6, heroCoordinates: 6 },
                { name: "Mediana", classCoordinates: 6, heroCoordinates: 7 },
                { name: "May", classCoordinates: 6, heroCoordinates: 8 }
            ]
        };

    }

    downloadTxtFile(stringStream) {
        var element = document.createElement("a");
        var file = new Blob([stringStream], { type: 'text/plain' });
        element.href = URL.createObjectURL(file);
        element.download = "myFile.txt";
        element.click();
    }

    getHeroDetail(name, data) {
        return _.find(this.state.heroesMapping, x => x.name === name);
    }

    startYesExitMacro() {
        let $script = "";
        $script += "0ScRiPtSePaRaToR1280|720|MULTI:1:0:1247:660ScRiPtSePaRaToR600\r\n"
        $script += "0ScRiPtSePaRaToR1280|720|MULTI:0:6ScRiPtSePaRaToR650\r\n"
        $script += "0ScRiPtSePaRaToR1280|720|MULTI:0:6ScRiPtSePaRaToR650\r\n"
        $script += "0ScRiPtSePaRaToR1280|720|MULTI:0:1ScRiPtSePaRaToR650\r\n"
        $script += "0ScRiPtSePaRaToR1280|720|MSBRL:0:29ScRiPtSePaRaToR650\r\n"
        $script += "0ScRiPtSePaRaToR1280|720|MULTI:1:0:1183:663ScRiPtSePaRaToR1200\r\n"
        $script += "0ScRiPtSePaRaToR1280|720|MULTI:0:6ScRiPtSePaRaToR1250\r\n"
        $script += "0ScRiPtSePaRaToR1280|720|MULTI:0:6ScRiPtSePaRaToR1250\r\n"
        $script += "0ScRiPtSePaRaToR1280|720|MULTI:0:1ScRiPtSePaRaToR1250\r\n"
        $script += "0ScRiPtSePaRaToR1280|720|MSBRL:0:29ScRiPtSePaRaToR1250\r\n"
        $script += "0ScRiPtSePaRaToR1280|720|MULTI:1:0:925:523ScRiPtSePaRaToR1800\r\n"
        $script += "0ScRiPtSePaRaToR1280|720|MULTI:0:6ScRiPtSePaRaToR1850\r\n"
        $script += "0ScRiPtSePaRaToR1280|720|MULTI:0:6ScRiPtSePaRaToR1850\r\n"
        $script += "0ScRiPtSePaRaToR1280|720|MULTI:0:1ScRiPtSePaRaToR1850\r\n"
        $script += "0ScRiPtSePaRaToR1280|720|MSBRL:0:29ScRiPtSePaRaToR1850\r\n"
        return $script
    }

    clickSelectButton(time) {
        let script = "";
        let totalTime = parseInt(time) + 100
        let totalTimePlus = parseInt(time) + 150

        script += `0ScRiPtSePaRaToR1280|720|MULTI:1:0:841:709ScRiPtSePaRaToR${totalTime}\r\n`
        script += `0ScRiPtSePaRaToR1280|720|MULTI:0:6ScRiPtSePaRaToR${totalTimePlus}\r\n`
        script += `0ScRiPtSePaRaToR1280|720|MULTI:0:6ScRiPtSePaRaToR${totalTimePlus}\r\n`
        script += `0ScRiPtSePaRaToR1280|720|MULTI:0:1ScRiPtSePaRaToR${totalTimePlus}\r\n`
        script += `0ScRiPtSePaRaToR1280|720|MSBRL:5:29ScRiPtSePaRaToR${totalTimePlus}\r\n`
        return script
    }

    generateClassMacroString(name, time) {
        let hero = this.getHeroDetail(name);
        let classCoordinateIndex = hero.classCoordinates;
        let classCoord = this.state.classCoordinates[classCoordinateIndex];
        let totalTime = parseInt(time) + 100;
        let totalTimePlus = parseInt(time) + 150;

        let script = "";
        script += `0ScRiPtSePaRaToR1280|720|MULTI:1:0:${classCoord.XCoord}:${classCoord.YCoord}ScRiPtSePaRaToR${totalTime}\r\n`
        script += `0ScRiPtSePaRaToR1280|720|MULTI:0:6ScRiPtSePaRaToR${totalTimePlus}\r\n`
        script += `0ScRiPtSePaRaToR1280|720|MULTI:0:6ScRiPtSePaRaToR${totalTimePlus}\r\n`
        script += `0ScRiPtSePaRaToR1280|720|MULTI:0:6ScRiPtSePaRaToR${totalTimePlus}\r\n`
        script += `0ScRiPtSePaRaToR1280|720|MSBRL:0:29ScRiPtSePaRaToR${totalTimePlus}\r\n`
        return script
    }

    generateHeroMacroString(name, time) {
        let hero = this.getHeroDetail(name)
        let heroCoordinateIndex = hero.heroCoordinates
        let heroCoord = this.state.heroesCoordinates[heroCoordinateIndex]
        let totalTime = parseInt(time) + 100
        let totalTimePlus = parseInt(time) + 150

        let script = "";
        script += `0ScRiPtSePaRaToR1280|720|MULTI:1:0:${heroCoord.XCoord}:${heroCoord.YCoord}ScRiPtSePaRaToR${totalTime}\r\n`
        script += `0ScRiPtSePaRaToR1280|720|MULTI:0:6ScRiPtSePaRaToR${totalTimePlus}\r\n`
        script += `0ScRiPtSePaRaToR1280|720|MULTI:0:6ScRiPtSePaRaToR${totalTimePlus}\r\n`
        script += `0ScRiPtSePaRaToR1280|720|MULTI:0:6ScRiPtSePaRaToR${totalTimePlus}\r\n`
        script += `0ScRiPtSePaRaToR1280|720|MSBRL:0:29ScRiPtSePaRaToR${totalTimePlus}\r\n`

        return script
    }


    processHeroes(heroList, interval) {
        //time starts at 3350 because start yes exit click takes approx 3 seconds
        let time = 2000;
        let script = this.startYesExitMacro();
        let parsedInterval = parseInt(interval);
        heroList.forEach(function (hero) {
            script += this.generateClassMacroString(hero.name, time);
            time = parseInt(time) + parsedInterval
            script += this.generateHeroMacroString(hero.name, time);
            time = parseInt(time) + parsedInterval
            script += this.clickSelectButton(time)
            time = parseInt(time) + parsedInterval
        }, this);

        return script;
    }

    render() {
        const noxMacroRecord = this.processHeroes(this.props.chosenHeroes, this.props.interval);

        return (
            <div style={{ marginTop: 20, marginBottom: 40 }}>
                <AppBar position="static" style={{ backgroundColor: "#2196f3", height: 48 }}>
                    <div style={{ margin: "auto auto" }}>Generated Nox Record</div>
                </AppBar>
                <div style={{ backgroundColor: "lightgrey", height: 300, overflow: "scroll" }}>
                    {noxMacroRecord}
                </div>

                <div>
                    <Button variant="raised" onClick={() => this.downloadTxtFile(noxMacroRecord)}>Download Txt</Button>
                </div>
            </div>


        );
    }
}

export default NoxRecordGenerator;