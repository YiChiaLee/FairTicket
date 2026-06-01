const events = [
  {
    title: "全本音樂劇《歌劇魅影》The Phantom of the Opera",
    type: "Theater",
    date: "May 17, 2026 · 1:00 PM",
    place: "台北表演藝術中心",
    price: "",
    image: "https://images.unsplash.com/photo-1503095396549-807759245b35?q=80&w=900&auto=format&fit=crop"
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
    title: "LiSA LiVE is Smile Always ~LACE UP~ in TAIPEI",
    type: "Concert",
    date: "Jun 19, 2026 · 11:00 AM",
    place: "TICC",
    price: "TWD 3000",
    image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=900&auto=format&fit=crop"
  },
  {
    title: "aespa LIVE TOUR - SYNK : COMPLAXITY - in TAIPEI",
    type: "Concert",
    date: "Aug 11, 2026 · 6:30 PM",
    place: "台北大巨蛋",
    price: "TWD 3500",
    image: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?q=80&w=900&auto=format&fit=crop",
    status: "Registration Open"
  }
];

const grid = document.querySelector("#allEventGrid");
const search = document.querySelector("#eventSearch");
const chips = document.querySelectorAll(".chip");

let currentFilter = "All";

function renderEvents() {
  const keyword = search.value.trim().toLowerCase();

  const filtered = events.filter(event => {
    const matchesFilter = currentFilter === "All" || event.type === currentFilter;
    const text = `${event.title} ${event.place} ${event.type}`.toLowerCase();
    return matchesFilter && text.includes(keyword);
  });

  grid.innerHTML = "";

  filtered.forEach(event => {
    const typeClass = event.type.toLowerCase();
    const img = event.image
      ? `<div class="image-wrap">${event.status ? `<span class="status-badge">${event.status}</span>` : ""}<img src="${event.image}" alt="${event.title}"></div>`
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
}

chips.forEach(chip => {
  chip.addEventListener("click", () => {
    chips.forEach(c => c.classList.remove("active"));
    chip.classList.add("active");
    currentFilter = chip.dataset.filter;
    renderEvents();
  });
});

search.addEventListener("input", renderEvents);
renderEvents();
