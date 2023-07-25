interface StatusBadgeProps {
  status: "sent" | "unread" | "ongoing" | "acepted" | "rejected";
}

export default function StatusBadge({ status }: StatusBadgeProps) {
  const bgColor = {
    sent: "bg-slate-300",
    unread: "bg-slate-300",
    ongoing: "bg-sky-300",
    acepted: "bg-green-300",
    rejected: "bg-red-300",
  };
  const text = {
    sent: "Envoyée",
    unread: "Non lue",
    ongoing: "En cours de traitement",
    acepted: "Acceptée",
    rejected: "Rejetée",
  };
  return (
    <div className="container flex">
      <p className={`${bgColor[status]} p-2 rounded-lg`}>{text[status]}</p>
    </div>
  );
}
