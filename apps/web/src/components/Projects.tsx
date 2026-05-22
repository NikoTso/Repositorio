import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ProjectCard } from "./ProjectCard";

type Project = {
    id: string;
    title: string;
    description: string;

    skills: {
        skill: {
        name: string;
        };
    }[];
};

export function Projects() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const apiUrl = (import.meta as any).env.VITE_API_URL || "http://localhost:3000";

        fetch(`${apiUrl}/projects`)
        .then((res) => {
            if (!res.ok) throw new Error("Erro na API");
            return res.json();
        })
        .then((data) => {
            setProjects(data);
            setIsLoading(false);
        })
        .catch((err) => {
            console.error(err);
            setIsLoading(false);
        });
    }, []);

    if (isLoading) {
        return (
        <section  className="max-w-6xl mx-auto px-6 py-24">
            <p className="text-zinc-500">
            Loading projects...
            </p>
        </section>
        );
    }

    return (
        <motion.section
            id="projects"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto px-6 py-24"
        >

        <h2 className="text-4xl font-bold text-white">
            Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mt-12">

            {projects.length === 0 ? (
            <p className="text-zinc-500">
                Nenhum projeto encontrado.
            </p>
            ) : (
            projects.map((project, index) => (
                <div
                    key={project.id}
                    className={index === 0 ? "md:col-span-2" : ""}>
                    <ProjectCard
                    title={project.title}
                    description={project.description}
                    skills={project.skills}
                    />
                </div>
            ))
            )}
        </div>

        </motion.section>
    );
}