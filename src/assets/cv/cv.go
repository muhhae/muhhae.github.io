package cv

type Researcher struct {
	ResearchInterest []string
	Education        []Education
	TechnicalSkill   map[string]any
}

type Education struct {
	SchoolName     string
	GraduationDate string
}

var Muhhae = Researcher{
	ResearchInterest: []string{
		"System",
		"Cache",
	},
	Education: []Education{
		{
			SchoolName:     "Sepuluh Nopember Institute of Technology",
			GraduationDate: "Dec 2025 (Expected)",
		},
	},
	TechnicalSkill: map[string]any{
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
