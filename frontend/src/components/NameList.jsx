export function NameList({ names }) {
  return (
    <ul className="">
      {names.map((name) => (
        <li key={crypto.randomUUID()}>{name}</li>
      ))}
    </ul>
  );
}
