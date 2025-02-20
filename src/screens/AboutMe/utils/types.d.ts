interface IEducation {
    title: string;
    courses: {
        name: string;
        institution: string;
        level: string;
        initDate: string;
        endDate: string;
        location: string;
    }[];
}

interface ILanguages {
    title: string;
    languages: {
        name: string;
        level: string;
    }[];
}

interface IEmploymentHistory {
    title: string;
    jobs: {
        company: string;
        position: string;
        initDate: string;
        endDate: string;
        location: string;
        modality: string;
    }[];
}

export interface IAboutMe {
    title: string;
    description: string;
    education: IEducation;
    languages: ILanguages;
    employmentHistory: IEmploymentHistory;
    curriculum: string;
    currently: string;
}
