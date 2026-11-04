import Link from "next/link";

const SECTIONS: { title: string; body: React.ReactNode }[] = [
  {
    title: "Privacy policy for heramb.tech",
    body: (
      <p>
        The privacy of visitors to this website is important to me. This policy explains what information is collected
        when you visit, and how it is used.
      </p>
    ),
  },
  {
    title: "Information I collect",
    body: (
      <>
        <p className="mb-3">
          If you use the contact form, your name, email address, subject and message are sent to me by email (through
          EmailJS) so that I can reply. They are not used for anything else.
        </p>
        <p>
          The site does not show advertising and does not sell or share personal information.
        </p>
      </>
    ),
  },
  {
    title: "Google Analytics",
    body: (
      <>
        <p className="mb-3">
          This website uses Google Analytics to understand how visitors use it: for example which pages are visited,
          for how long, from which country, and on what kind of device. Google Analytics uses cookies and collects this
          information in aggregate; I use it only to improve the website.
        </p>
        <p>
          You can learn how Google uses this data at{" "}
          <a className="text-blue-700 dark:text-blue-400" href="https://policies.google.com/technologies/partner-sites">
            policies.google.com
          </a>
          , and opt out with the{" "}
          <a className="text-blue-700 dark:text-blue-400" href="https://tools.google.com/dlpage/gaoptout">
            Google Analytics opt-out browser add-on
          </a>
          .
        </p>
      </>
    ),
  },
  {
    title: "Security",
    body: (
      <p>
        I take reasonable steps to protect the information I receive. However, no website can be completely secure, so
        its security cannot be guaranteed.
      </p>
    ),
  },
  {
    title: "Contact",
    body: (
      <p>
        If you have any questions about this privacy policy, please{" "}
        <Link className="text-blue-700 dark:text-blue-400" href="/contact">
          get in touch
        </Link>
        .
      </p>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="dark:text-white dark:bg-gray-900">
      <div className="container mx-auto grid grid-cols-1 px-5 md:px-20 pt-20 pb-10">
        <h1 className="dark:text-white text-3xl md:text-5xl pb-8 text-center">Privacy Policy</h1>
        {SECTIONS.map(({ title, body }) => (
          <section key={title} className="shadow p-5 bg-gray-50 dark:bg-gray-800">
            <h2 className="text-2xl mb-4">{title}</h2>
            {body}
          </section>
        ))}
      </div>
    </div>
  );
}
