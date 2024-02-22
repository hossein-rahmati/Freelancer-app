function Table({ children }) {
  return (
    <div>
      <table className="bg-secondary-0 overflow-x-auto">{children}</table>
    </div>
  );
}

export default Table;

function TableHeader({ children }) {
  return (
    <thead>
      <tr className="title-row">{children}</tr>
    </thead>
  );
}

function TableBody({ children }) {
  return (
    <tbody>
      <tr>{children}</tr>
    </tbody>
  );
}

function TableRow({ children }) {
  return <tr>{children}</tr>;
}

Table.Header = TableHeader;
Table.Body = TableBody;
Table.Row = TableRow;
