function showCompanyModal() {
  document.getElementById('companyModal').classList.remove('hidden');
}

function closeCompanyModal() {
  document.getElementById('companyModal').classList.add('hidden');
}

function showAlexaModal() {
  document.getElementById('alexaModal').classList.remove('hidden');
}

function closeAlexaModal() {
  document.getElementById('alexaModal').classList.add('hidden');
}

function showRLAModal() {
  document.getElementById('RLAModal').classList.remove('hidden');
}

function closeRLAModal() {
  document.getElementById('RLAModal').classList.add('hidden');
}

function showPicShareModal() {
  document.getElementById('picShareModal').classList.remove('hidden');
}

function closePicShareModal() {
  document.getElementById('picShareModal').classList.add('hidden');
}

function showKotlinModal() {
  document.getElementById('kotlinModal').classList.remove('hidden');
}

function closeKotlinModal() {
  document.getElementById('kotlinModal').classList.add('hidden');
}

function showFlutterModal() {
  document.getElementById('flutterModal').classList.remove('hidden');
}

function closeFlutterModal() {
  document.getElementById('flutterModal').classList.add('hidden');
}

function showAriModal() {
  document.getElementById('ariModal').classList.remove('hidden');
}

function closeAriModal() {
  document.getElementById('ariModal').classList.add('hidden');
}

function showSS360Modal() {
  document.getElementById('ss360Modal').classList.remove('hidden');
}

function closeSS360Modal() {
  document.getElementById('ss360Modal').classList.add('hidden');
}

function showPokedexModal() {
  document.getElementById('pokedexModal').classList.remove('hidden');
}

function closePokedexModal() {
  document.getElementById('pokedexModal').classList.add('hidden');
}

function openFullScreen() {
  const fullscreenIframe = document.getElementById('fullscreenIframe');
  fullscreenIframe.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeFullScreen() {
  const fullscreenIframe = document.getElementById('fullscreenIframe');
  fullscreenIframe.style.display = 'none';
  document.body.style.overflow = 'auto';
}