import ContactForm from "components/ContactForm";
import type { NextPage } from "next";
import {
  Code,
  DownloadCloud,
  Linkedin,
  MessageSquare,
  User,
  GitHub,
} from "react-feather";

const infos = [
  { id: 0, Icon: User, label: <span>Onyekwere Chidiebube Precious</span> },
  { id: 1, Icon: Code, label: <span>Full Stack Web Developer</span> },
  {
    id: 2,
    Icon: MessageSquare,
    label: (
      <a href="mailto:onyekwerechidip@gmail.com">onyekwerechidip@gmail.com</a>
    ),
  },
  {
    id: 3,
    Icon: GitHub,
    label: (
      <a href="https://github.com/Yellow-May" target="_blank" rel="noreferrer">
        Github Profile
      </a>
    ),
  },
  {
    id: 4,
    Icon: Linkedin,
    label: (
      <a
        href="https://www.linkedin.com/in/precious-onyekwere-7a87001b5/"
        target="_blank"
        rel="noreferrer"
      >
        Linkedin Profile
      </a>
    ),
  },
  {
    id: 5,
    Icon: DownloadCloud,
    label: (
      <a
        href="/files/onyekwere-precious-web-dev.pdf"
        target="_blank"
        rel="noreferrer"
      >
        Resume / CV
      </a>
    ),
  },
];

const Contact: NextPage = () => {
  return (
    <main className="contact_page grid gap-10">
      <section className="profile_section">
        <h1>Profile Info</h1>

        <ul className="grid gap-4">
          {infos.map(({ id, Icon, label }) => (
            <li
              key={id}
              className="md:text-lg text-gray-700 font-semibold flex items-baseline gap-2 p-1 border-b border-gray-700 cursor-pointer"
            >
              <Icon className="h-4 stroke-blue-700" />
              {label}
            </li>
          ))}
        </ul>
      </section>

      <section className="contact-me">
        <h2>Contact Me</h2>

        <ContactForm />
      </section>
    </main>
  );
};

export default Contact;
