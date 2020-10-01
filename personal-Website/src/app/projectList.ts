import { from } from 'rxjs';
import {Project} from './project';

export const Projects: Project[] = [

    // new dict for each project
    {
        id : 0,
        name : "Adam Simulator",
        icon : "../assets/images/test.png",
        description : 
        `The first game I made for my vet course. 
        a giant turtle boss flies over a lake shooting exploding straws at you while you attempt to kill him
        you must also dodge smaller turlte which explode when in your proximity`,
        link : "https://pricetag.itch.io/adam-simulator"
    },
    {
        id : 1,
        name : "The Darksouls Of Sword-Fighting Games",
        icon : "../assets/images/TDSOSFG.png",
        description : `My final project for my vet course. 
        Roam through a small map sword fighting enemys along the way untill you reach the boss.
        voice acted by friends and my teacher`,
        link : "https://drive.google.com/uc?id=1crg3HTtgZ18B5iroxxTl2wzDuoRsNWAe&export=download"
    },
    {
        id : 2,
        name : "Multiplayer Astroids",
        icon : "../assets/images/Astroid.png",
        description : 
        `An online multiplayer version of Astroids I made in Pygame for an IT assignment. 
        Both players connect to a server and play untill one reaches a certain score`,
        link : "https://github.com/Pricetag098/MultiPlayer-Space-Game"
    },
    {
        id : 3,
        name : "Game Orginiser",
        icon : "../assets/images/Plat 1.png",
        description : 
        `A website built with Flask to allow players to create, 
        manage and play against esports teams. the teams were ranked off of preformance`,
        link : "https://github.com/Epic-Gamer-Inc/Game-Orginiser"
    }



]