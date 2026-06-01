const events = [
  {
    title: "aespa LIVE TOUR - SYNK : COMPLAXITY - in TAIPEI",
    type: "Concert",
    date: "Aug 11, 2026 · 6:30 PM",
    place: "台北大巨蛋",
    price: "TWD 3500",
    image: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?q=80&w=900&auto=format&fit=crop"
  },
  {
    title: "LiSA LiVE is Smile Always ~LACE UP~ in TAIPEI",
    type: "Concert",
    date: "Jun 19, 2026 · 11:00 AM",
    place: "TICC",
    price: "TWD 3000",
    image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=900&auto=format&fit=crop"
  },
  {
    title: "中華職棒例行賽G143 富邦 vs 統一",
    type: "Sports",
    date: "Jun 5, 2026 · 12:00 PM",
    place: "台北大巨蛋",
    price: "TWD 1000",
    image: ""
  },
  {
    title: "全本音樂劇《歌劇魅影》The Phantom of the Opera",
    type: "Theater",
    date: "May 17, 2026 · 1:00 PM",
    place: "台北表演藝術中心",
    price: "",
    image: "https://images.unsplash.com/photo-1503095396549-807759245b35?q=80&w=900&auto=format&fit=crop"
  }
];

const grid = document.querySelector("#eventGrid");

events.forEach(event => {
  const typeClass = event.type.toLowerCase();
  const img = event.image
    ? `<img src="${event.image}" alt="${event.title}">`
    : `<div class="placeholder">◇</div>`;

  const card = document.createElement("article");
  card.className = "event-card";
  card.innerHTML = `
    ${img}
    <div class="event-body">
      <span class="tag ${typeClass}">${event.type}</span>
      <h3>${event.title}</h3>
      <div class="meta">◷ ${event.date}<br>⌖ ${event.place}</div>
      <div class="price-row">
        <span>Ticket Price</span>
        <span class="price">${event.price}</span>
      </div>
    </div>
  `;
  grid.appendChild(card);
});
