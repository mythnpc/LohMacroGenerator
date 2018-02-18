#Output file change it as you please...
$OutputFile = "D:\Macro.txt"
#This is where your chosen heroes go 
$usedHeroes = "Phillop, Demia, Scarlet, Baudouin, Tanya, Maria, Gau, Gladi, Mediana, Laias, Priscilla, Nyx"
#If things got too fast or too slow change this, 1000 ms = 1 second
$interval = 1000

$ClassTab = @(
    [pscustomobject]@{class = "Knight"; XCoord = 494; YCoord = 160},
    [pscustomobject]@{class = "Warrior"; XCoord = 567; YCoord = 160},
    [pscustomobject]@{class = "Assassin"; XCoord = 640; YCoord = 160},
    [pscustomobject]@{class = "Archer"; XCoord = 712; YCoord = 160},
    [pscustomobject]@{class = "Machinist"; XCoord = 791; YCoord = 160},
    [pscustomobject]@{class = "Wizard"; XCoord = 870; YCoord = 160},
    [pscustomobject]@{class = "Priest"; XCoord = 930; YCoord = 160}
)

$HeroTab = @(
    [pscustomobject]@{class = "One"; XCoord = 405; YCoord = 211},
    [pscustomobject]@{class = "Two"; XCoord = 509; YCoord = 211},
    [pscustomobject]@{class = "Three"; XCoord = 622; YCoord = 211},
    [pscustomobject]@{class = "Four"; XCoord = 718; YCoord = 211},
    [pscustomobject]@{class = "Five"; XCoord = 827; YCoord = 211},
    [pscustomobject]@{class = "Six"; XCoord = 925; YCoord = 211},
    [pscustomobject]@{class = "Seven"; XCoord = 398; YCoord = 326},
    [pscustomobject]@{class = "Eight"; XCoord = 509; YCoord = 320},
    [pscustomobject]@{class = "Nine"; XCoord = 612; YCoord = 322}
)

$Heroes = @(
    [pscustomobject]@{name = "Phillop"; ClassTab = 0; HeroTab = 0},
    [pscustomobject]@{name = "Clause"; ClassTab = 0; HeroTab = 1},
    [pscustomobject]@{name = "Demia"; ClassTab = 0; HeroTab = 2},
    [pscustomobject]@{name = "Morrah"; ClassTab = 0; HeroTab = 3},
    [pscustomobject]@{name = "Jane"; ClassTab = 0; HeroTab = 4},
    [pscustomobject]@{name = "Ricardo"; ClassTab = 0; HeroTab = 5},
    [pscustomobject]@{name = "Sonia"; ClassTab = 0; HeroTab = 6},

    [pscustomobject]@{name = "Kasel"; ClassTab = 1; HeroTab = 0},
    [pscustomobject]@{name = "Gau"; ClassTab = 1; HeroTab = 1},
    [pscustomobject]@{name = "Naila"; ClassTab = 1; HeroTab = 2},
    [pscustomobject]@{name = "Theo"; ClassTab = 1; HeroTab = 3},
    [pscustomobject]@{name = "Viska"; ClassTab = 1; HeroTab = 4},
    [pscustomobject]@{name = "Priscilla"; ClassTab = 1; HeroTab = 5},
    [pscustomobject]@{name = "Scarlet"; ClassTab = 1; HeroTab = 6},

    [pscustomobject]@{name = "Roi"; ClassTab = 2; HeroTab = 0},
    [pscustomobject]@{name = "Epis"; ClassTab = 2; HeroTab = 1},
    [pscustomobject]@{name = "Reina"; ClassTab = 2; HeroTab = 2},
    [pscustomobject]@{name = "Fluss"; ClassTab = 2; HeroTab = 3},
    [pscustomobject]@{name = "Tanya"; ClassTab = 2; HeroTab = 4},
    [pscustomobject]@{name = "Ezekiel"; ClassTab = 2; HeroTab = 5},
    [pscustomobject]@{name = "Mirianne"; ClassTab = 2; HeroTab = 6},
    [pscustomobject]@{name = "Gladi"; ClassTab = 2; HeroTab = 7},

    [pscustomobject]@{name = "Selene"; ClassTab = 3; HeroTab = 0},
    [pscustomobject]@{name = "Dimael"; ClassTab = 3; HeroTab = 1},
    [pscustomobject]@{name = "Luna"; ClassTab = 3; HeroTab = 2},
    [pscustomobject]@{name = "Arch"; ClassTab = 3; HeroTab = 3},
    [pscustomobject]@{name = "Yanne"; ClassTab = 3; HeroTab = 4},
    [pscustomobject]@{name = "Requina"; ClassTab = 3; HeroTab = 5},

    [pscustomobject]@{name = "Lakrak"; ClassTab = 4; HeroTab = 0},
    [pscustomobject]@{name = "Miruru"; ClassTab = 4; HeroTab = 1},
    [pscustomobject]@{name = "Rodina"; ClassTab = 4; HeroTab = 2},
    [pscustomobject]@{name = "Annete"; ClassTab = 4; HeroTab = 3},
    [pscustomobject]@{name = "Mitra"; ClassTab = 4; HeroTab = 4},
    [pscustomobject]@{name = "Oddy"; ClassTab = 4; HeroTab = 5},

    [pscustomobject]@{name = "Cleo"; ClassTab = 5; HeroTab = 0},
    [pscustomobject]@{name = "Maria"; ClassTab = 5; HeroTab = 1},
    [pscustomobject]@{name = "Loraine"; ClassTab = 5; HeroTab = 2},
    [pscustomobject]@{name = "Pavel"; ClassTab = 5; HeroTab = 3},
    [pscustomobject]@{name = "Aisha"; ClassTab = 5; HeroTab = 4},
    [pscustomobject]@{name = "Lewisia"; ClassTab = 5; HeroTab = 5},
    [pscustomobject]@{name = "Nyx"; ClassTab = 5; HeroTab = 6},
    [pscustomobject]@{name = "Ophelia"; ClassTab = 5; HeroTab = 7},
    [pscustomobject]@{name = "Artemia"; ClassTab = 5; HeroTab = 8},
    
    [pscustomobject]@{name = "Frey"; ClassTab = 6; HeroTab = 0},
    [pscustomobject]@{name = "Kaulah"; ClassTab = 6; HeroTab = 1},
    [pscustomobject]@{name = "Rephy"; ClassTab = 6; HeroTab = 2},
    [pscustomobject]@{name = "Baudouin"; ClassTab = 6; HeroTab = 3},
    [pscustomobject]@{name = "Leo"; ClassTab = 6; HeroTab = 4},
    [pscustomobject]@{name = "Laias"; ClassTab = 6; HeroTab = 5},
    [pscustomobject]@{name = "Cassandra"; ClassTab = 6; HeroTab = 6},
    [pscustomobject]@{name = "Mediana"; ClassTab = 6; HeroTab = 7},
    [pscustomobject]@{name = "May"; ClassTab = 6; HeroTab = 8}
)

Function GetHeroDetail($name) {
    ForEach ($Hero in $Heroes) {
        if ($Hero.name -eq $name) {
            return $Hero
        }
    }
}

Function StartYesExitMacro() {
    $script += "0ScRiPtSePaRaToR1280|720|MULTI:1:0:1247:660ScRiPtSePaRaToR1000`n"
    $script += "0ScRiPtSePaRaToR1280|720|MULTI:0:6ScRiPtSePaRaToR1050`n"
    $script += "0ScRiPtSePaRaToR1280|720|MULTI:0:6ScRiPtSePaRaToR1050`n"
    $script += "0ScRiPtSePaRaToR1280|720|MULTI:0:1ScRiPtSePaRaToR1050`n"
    $script += "0ScRiPtSePaRaToR1280|720|MSBRL:0:29ScRiPtSePaRaToR1050`n"
    $script += "0ScRiPtSePaRaToR1280|720|MULTI:1:0:1183:663ScRiPtSePaRaToR2000`n"
    $script += "0ScRiPtSePaRaToR1280|720|MULTI:0:6ScRiPtSePaRaToR2050`n"
    $script += "0ScRiPtSePaRaToR1280|720|MULTI:0:6ScRiPtSePaRaToR2050`n"
    $script += "0ScRiPtSePaRaToR1280|720|MULTI:0:1ScRiPtSePaRaToR2050`n"
    $script += "0ScRiPtSePaRaToR1280|720|MSBRL:0:29ScRiPtSePaRaToR2050`n"
    $script += "0ScRiPtSePaRaToR1280|720|MULTI:1:0:925:523ScRiPtSePaRaToR3000`n"
    $script += "0ScRiPtSePaRaToR1280|720|MULTI:0:6ScRiPtSePaRaToR3050`n"
    $script += "0ScRiPtSePaRaToR1280|720|MULTI:0:6ScRiPtSePaRaToR3050`n"
    $script += "0ScRiPtSePaRaToR1280|720|MULTI:0:1ScRiPtSePaRaToR3050`n"
    $script += "0ScRiPtSePaRaToR1280|720|MSBRL:0:29ScRiPtSePaRaToR3050`n"
    return $script
}

Function ClickSelectButton($time){
    $script += "0ScRiPtSePaRaToR1280|720|MULTI:1:0:841:709ScRiPtSePaRaToR{0}`n" -f [string]($time + 100)
    $script += "0ScRiPtSePaRaToR1280|720|MULTI:0:6ScRiPtSePaRaToR{0}`n" -f [string]($time + 150)
    $script += "0ScRiPtSePaRaToR1280|720|MULTI:0:6ScRiPtSePaRaToR{0}`n" -f [string]($time + 150)
    $script += "0ScRiPtSePaRaToR1280|720|MULTI:0:1ScRiPtSePaRaToR{0}`n" -f [string]($time + 150)
    $script += "0ScRiPtSePaRaToR1280|720|MSBRL:5:29ScRiPtSePaRaToR{0}`n" -f [string]($time + 150)
    return $script
}

Function GenerateClassMacroString([string]$name, [int]$time){
    $hero = GetHeroDetail($name)
    $classTabIndex = $hero.ClassTab
    $classTab = $ClassTab[$classTabIndex]

    $script += "0ScRiPtSePaRaToR1280|720|MULTI:1:0:{0}:{1}ScRiPtSePaRaToR{2}`n" -f $ClassTab.XCoord, $ClassTab.YCoord, [string]($time + 100)
    $script += "0ScRiPtSePaRaToR1280|720|MULTI:0:6ScRiPtSePaRaToR{0}`n" -f [string]($time + 150)
    $script += "0ScRiPtSePaRaToR1280|720|MULTI:0:6ScRiPtSePaRaToR{0}`n" -f [string]($time + 150)
    $script += "0ScRiPtSePaRaToR1280|720|MULTI:0:6ScRiPtSePaRaToR{0}`n" -f [string]($time + 150)
    $script += "0ScRiPtSePaRaToR1280|720|MSBRL:0:29ScRiPtSePaRaToR{0}`n" -f [string]($time + 150)
    return $script
}

Function GenerateHeroMacroString([string]$name, [int]$time) {
    $hero = GetHeroDetail($name)
    $heroTabIndex = $hero.HeroTab
    $heroTab = $HeroTab[$heroTabIndex]

    $script += "0ScRiPtSePaRaToR1280|720|MULTI:1:0:{0}:{1}ScRiPtSePaRaToR{2}`n" -f $HeroTab.XCoord, $HeroTab.YCoord, [string]($time + 100)
    $script += "0ScRiPtSePaRaToR1280|720|MULTI:0:6ScRiPtSePaRaToR{0}`n" -f [string]($time + 150)
    $script += "0ScRiPtSePaRaToR1280|720|MULTI:0:6ScRiPtSePaRaToR{0}`n" -f [string]($time + 150)
    $script += "0ScRiPtSePaRaToR1280|720|MULTI:0:6ScRiPtSePaRaToR{0}`n" -f [string]($time + 150)
    $script += "0ScRiPtSePaRaToR1280|720|MSBRL:0:29ScRiPtSePaRaToR{0}`n" -f [string]($time + 150)

    return $script
}

$arrayOfUsedHeroes = $usedHeroes.Split(",")
$time = 3550
$macroScript = StartYesExitMacro
foreach ($hero in $arrayOfUsedHeroes) {
    $hero = $hero.replace(' ', '')
    $macroScript += GenerateClassMacroString -name $hero -time $time
    $time += $interval;
    $macroScript += GenerateHeroMacroString -name $hero -time $time
    $time += $interval;
    $macroScript += ClickSelectButton -time $time
    $time += $interval
}

$macroScript

$macroScript > $OutputFile

    
