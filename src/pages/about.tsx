import Layout from "../components/Layout";

export default function About() {
  return (
    <Layout>
      <div className="about">
        <h1>about me</h1>
        <article>
          <p>currently a software crafter at 8th Light</p>
          <p>also currently a wip</p>
        </article>
      </div>
      <style jsx>{`
        .about {
          display: flex;
          flex-direction: column;
          flex: 1 1 auto;
          justify-content: flex-start;
          align-items: center;
        }
      `}</style>
    </Layout>
  );
}
