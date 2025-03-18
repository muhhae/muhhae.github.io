package cv

type Researcher struct {
	ResearchInterest []string
	Education        []Education
	Skill            map[string]any
}

type Education struct {
	Degree     string
	SchoolName string
	Date       string
}

var Muhhae = Researcher{
	ResearchInterest: []string{
		"System",
		"Cache",
	},
	Education: []Education{
		{
			Degree:     "B.Eng in Computer Engineering",
			SchoolName: "Sepuluh Nopember Institute of Technology",
			Date:       "Aug 2022 - Dec 2025 (Expected)",
		},
	},
	Skill: map[string]any{
		"Programming Language": []string{
			"C",
			"C++",
			"Go",
			"Python",
			"Javascript",
			"Typescript",
			"C#",
			"Lua",
			"Bash",
		},
	},
}
