import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import { SocialList } from "../components/SocialList";

export default function Index() {
  return (
    <Layout>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <div className="container">
        <div>
          <div className="title">
            brian sung<span className="fancy">.</span>
          </div>
          <span className="handle">@seoulection</span>
          <SocialList />
        </div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 1 1 auto;
          padding: 0 1.5rem;
        }
        .title {
          font-size: 5rem;
          margin: 0;
          font-weight: 500;
        }
        .fancy {
          position: relative;
          right: 319px;
          bottom: 45px;
          animation-name: fancy;
          animation-duration: 4s;
          animation-iteration-count: infinite;
          color: #15847d;
        }
        .handle {
          display: inline-block;
          margin-top: 0.275em;
          margin-bottom: 1.5rem;
          color: #9b9b9b;
          letter-spacing: 0.05em;
        }

        @media (min-width: 769px) {
          h1 {
            font-size: 3rem;
          }
          h2 {
            font-size: 2.25rem;
          }
        }

        @keyframes fancy {
          0% {
            color: #15847d;
          }
          25% {
            color: #bd3215;
          }
          50% {
            color: #c16df4;
          }
          100% {
            color: #15847d;
          }
        }
      `}</style>
    </Layout>
  );
}
