const phoneInput = document.getElementById("phoneInput");
const result = document.getElementById("result");

// Area code map
const areaCodes = {
  "011": "Johannesburg",
  "012": "Pretoria",
  "013": "Nelspruit",
  "014": "Rustenburg / Bela-Bela",
  "015": "Polokwane",
  "016": "Vereeniging",
  "017": "Secunda",
  "018": "Potchefstroom",
  "021": "Cape Town",
  "022": "Malmesbury",
  "023": "Worcester",
  "027": "Springbok",
  "028": "Bredasdorp",
  "031": "Durban",
  "032": "Verulam",
  "033": "Pietermaritzburg",
  "034": "Newcastle",
  "035": "Richards Bay",
  "036": "Ladysmith",
  "039": "Port Shepstone",
  "040": "Bhisho",
  "041": "Gqeberha (PE)",
  "042": "Humansdorp",
  "043": "East London",
  "044": "George",
  "045": "Queenstown",
  "046": "Grahamstown",
  "047": "Mthatha",
  "048": "Burgersdorp",
  "049": "Graaff-Reinet",
  "051": "Bloemfontein",
  "053": "Kimberley",
  "054": "Upington",
  "056": "Kroonstad",
  "057": "Welkom",
  "058": "Bethlehem",
  "060": "Cellular (Cell C)",
  "061": "Cellular (Telkom)",
  "062": "Cellular (Telkom)",
  "063": "Cellular (MTN)",
  "064": "Cellular (Cell C)",
  "065": "Cellular (MTN)",
  "066": "Cellular (Vodacom)",
  "067": "Cellular (Telkom)",
  "068": "Cellular (MTN)",
  "069": "Cellular (Vodacom)",
  "071": "Cellular (Vodacom)",
  "072": "Cellular (Vodacom)",
  "073": "Cellular (MTN)",
  "074": "Cellular (Cell C)",
  "076": "Cellular (Vodacom)",
  "078": "Cellular (MTN)",
  "079": "Cellular (Vodacom)",
  "081": "Cellular (Telkom)",
  "082": "Cellular (Vodacom)",
  "083": "Cellular (MTN)",
  "084": "Cellular (Cell C)",
  "085": "Cellular (Rain)",
  "086": "Shared Services",
  "087": "VoIP",
};

function normalizeNumber(input) {
  return input.replace(/[\s\-]/g, "").replace(/^(\+27|0027)/, "27");
}

function validatePhone() {
  const raw = phoneInput.value.trim();
  const normalized = normalizeNumber(raw);

  let cleaned = normalized;
  if (cleaned.startsWith("0")) cleaned = cleaned;
  else if (cleaned.startsWith("27")) cleaned = "0" + cleaned.slice(2);
  else {
    result.textContent = "❌ Number must start with 0, +27, or 0027";
    result.className = "result error";
    return;
  }

  if (!/^[0-9]{10}$/.test(cleaned)) {
    result.textContent =
      "❌ Invalid: SA numbers must be 10 digits long after formatting.";
    result.className = "result error";
    return;
  }

  const prefix = cleaned.substring(0, 3);
  const area = areaCodes[prefix];

  if (area) {
    result.textContent = `✅ Valid SA number (${prefix}): ${area}`;
    result.className = "result success";
  } else {
    result.textContent = `✅ Valid SA number, but area/prefix '${prefix}' is unknown.`;
    result.className = "result success";
  }
}

phoneInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    validatePhone();
  }
});
