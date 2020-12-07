export interface SkillsetBlueprint {
  id: number,
  image: string,
  title: string,
  description: Array<string>
}

export const skillsetData: Array<SkillsetBlueprint> = [
  {
    id: 1,
    image: "",
    title: "JavaScript",
    description: ["ES6", "TypeScript", "DOM manipulation", "fetch", "callbacks"]
  },
  {
    id: 2,
    image: "",
    title: "React",
    description: ["Hooks", "useContext", "Redux", "styled components"]
  },
  {
    id: 3,
    image: "",
    title: "Java",
    description: ["OOP", "Spring boot", "Hibernate", "Spring Security"]
  },
  {
    id: 4,
    image: "",
    title: "Python",
    description: ["Python", "Flask and Jinja basics"]
  }
]