export default function ProfileInfo({
  name = "Profile",
  gamesPlayed = 0,
  wins = 0,
}) {
  let winPct = ((wins / gamesPlayed) * 100).toFixed(1);
  // TODO: Add more stats later...
  return (
    <section>
      <p className="profile-name">{name}</p>
      <hr />
      <ul className="profile-stats">
        <li>
          <data value={gamesPlayed}>{gamesPlayed}</data> Games
        </li>
        <li>
          <data value={wins}>{wins}</data> Wins
        </li>
        <li>
          {/* TODO: Detect NaN, Infinity, null... Displayed values should be 0 */}
          <data value={winPct}>{winPct}%</data> Winning Percentage
        </li>
      </ul>
    </section>
  );
}
