function StatCard({ icon, title, value, desc }) {
  return (
    <div className="stat-card">
      <div className="stat-icon">{icon}</div>
      <h2>{value}</h2>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}

export default StatCard;