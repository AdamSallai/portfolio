import portfolio from "../../projectIcons/portfolio.png"
import funStudy from "../../projectIcons/funStudy.jpg"

export interface ProjectBlueprint {
  id: number,
  title: string,
  description: string,
  github: Array<string>,
  technologies: Array<string>,
  pictureURL: string
}


export const dataOfProjects: Array<ProjectBlueprint> = [
  // {
  //   id: 1,
  //   title: "Nigel",
  //   description: "An application for planning your own garden",
  //   github: ["https://github.com/eni-kliszki/Nigel-Frontend","https://github.com/eni-kliszki/Nigel-Backend"],
  //   technologies: ["JavaScript","React","Redux","Java","Spring Boot"],
  //   pictureURL: nigel
  // },
  {
    id: 2,
    title: "FunStudy",
    description: "A website that helps learning english words, with a simple word guessing game, and a memory game",
    github: ["https://github.com/AdamSallai/FunStudy","https://github.com/Kattkovacs/fun-study-backend"],
    technologies: ["JavaScript","React","Java","Spring Boot"],
    pictureURL: funStudy
  },
  {
    id: 3,
    title: "Portfolio",
    description: "A website I made to introduce myself and make my projects available to anyone",
    github: ["https://github.com/AdamSallai/portfolio"],
    technologies: ["React","TypeScript","Sass"],
    pictureURL: portfolio
  }
]