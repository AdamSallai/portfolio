import js from "../../skillIcons/js.png"
import java from "../../skillIcons/java.jpg"
import python from "../../skillIcons/python.png"
import react from "../../skillIcons/react.png"

export interface SkillsetBlueprint {
  id: number,
  image: string,
  title: string,
  description: Array<string>
}

export const skillsetData: Array<SkillsetBlueprint> = [
  {
    id: 1,
    image: js,
    title: "JavaScript",
    description: ["ES6", "TypeScript", "DOM manipulation", "fetch", "callbacks"]
  },
  {
    id: 2,
    image: react,
    title: "React",
    description: ["Hooks", "useContext", "Redux", "styled components"]
  },
  {
    id: 3,
    image: java,
    title: "Java",
    description: ["OOP", "Spring boot", "Hibernate", "Spring Security"]
  },
  {
    id: 4,
    image: python,
    title: "Python",
    description: ["Python", "Flask and Jinja basics"]
  }
]