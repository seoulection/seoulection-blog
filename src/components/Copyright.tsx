export default function Copyright() {
  const date: Date = new Date();
  return (
    <>
      <p>&copy; seoulection {date.getFullYear()}</p>
      <style jsx>
        {`
          p {
            font-size: 0.75rem;
            text-align: center;
          }
        `}
      </style>
    </>
  );
}
