type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    // feedbacks: TSection;
    tech: TSection;
    // works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Najmuddin Ali — Portfolio",
    fullName: "Najmuddin Ali",
    email: "anonylines02x@gmail.com",
  },
  hero: {
    name: "Najmuddin Ali",
    p: ["I fullstack develop, Devops", "engineer and web REST API"],
  },
  contact: {
    p: "You can ask about me",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `I am a junior fullstack developer who is self-motivated to continue learning. 
      Fluent in the .Net C#, SQL, Python, JavaScript, Typescript and CSS programming languages. 
      Have practical working knowledge of relational databases using PostgreSQL, SQL Server, Cloud Development, and Agile Development. 
      Keep personal and professional technical skills up to date with complementary college courses and online bootcamps. 
      Reliable and responsible teamwork.
      `,
    },
    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
    },
    // feedbacks: {
    //   p: "What others say",
    //   h2: "Testimonials.",
    // },
    // works: {
    //   p: "My work",
    //   h2: "Projects.",
    //   content: `Following projects showcases my skills and experience through
    // real-world examples of my work. Each project is briefly described with
    // links to code repositories and live demos in it. It reflects my
    // ability to solve complex problems, work with different technologies,
    // and manage projects effectively.`,
    // },
    tech: {
      p: "technology implemented into the project",
      h2: "Technology"
    }
  },
};
