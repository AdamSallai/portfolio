export interface SkillsetBlueprint {
  image: string,
  title: string,
  description: Array<string>
}

export const skillsetData: Array<SkillsetBlueprint> = [
  {
    image: "",
    title: "JavaScript",
    description: ["ES6", "TypeScript", "DOM manipulation", "fetch", "callbacks"]
  },
  {
    image: "",
    title: "React",
    description: ["Hooks", "useContext", "Redux", "styled components"]
  },
  {
    image: "",
    title: "Java",
    description: ["OOP", "Spring boot", "Hibernate", "Spring Security"]
  },
  {
    image: "",
    title: "Python",
    description: ["Python", "Flask and Jinja basics"]
  }
]