function Table({ children }) {
    return <table>{children}</table>
}

export default Table;

function TableHeader({ children }) {
  return <thead>{children}</thead>;
}
function TableBody({ children }) {
  return <tbody>{children}</tbody>;
}
function TableRow({ children }) {
  return <tr className="title-row">{children}</tr>;
}

Table.Header = TableHeader;
Table.Body = TableBody;
Table.Row = TableRow;
