const STEPS = [
  {
    id: 'occasion',
    title: 'Какой повод?',
    hint: 'Выберите событие, для которого готовите десерт',
    label: 'Повод',
    options: [
      { id: 'birthday', emoji: '🎂', name: 'День рождения', desc: 'Яркий и запоминающийся' },
      { id: 'wedding', emoji: '💍', name: 'Свадьба', desc: 'Элегантный и торжественный' },
      { id: 'romantic', emoji: '💕', name: 'Романтический ужин', desc: 'Нежный и изысканный' },
      { id: 'kids', emoji: '🎈', name: 'Детский праздник', desc: 'Весёлый и красочный' },
      { id: 'holiday', emoji: '🎄', name: 'Праздник', desc: 'Сезонный и атмосферный' },
      { id: 'tea', emoji: '☕', name: 'Чаепитие', desc: 'Уютный и домашний' },
    ],
  },
  {
    id: 'biscuit',
    title: 'Какой бисквит?',
    hint: 'Основа торта — от неё зависит вкус и текстура',
    label: 'Бисквит',
    options: [
      { id: 'vanilla', emoji: '🍦', name: 'Ванильный', desc: 'Классика, универсальная основа' },
      { id: 'chocolate', emoji: '🍫', name: 'Шоколадный', desc: 'Насыщенный и насыщенный' },
      { id: 'redvelvet', emoji: '❤️', name: 'Красный бархат', desc: 'Нежный с лёгкой кислинкой' },
      { id: 'honey', emoji: '🍯', name: 'Медовый', desc: 'Ароматный и сочный' },
      { id: 'carrot', emoji: '🥕', name: 'Морковный', desc: 'Пряный и влажный' },
      { id: 'lemon', emoji: '🍋', name: 'Лимонный', desc: 'Свежий и лёгкий' },
    ],
  },
  {
    id: 'filling',
    title: 'Какая начинка?',
    hint: 'Сердце десерта — то, что делает его особенным',
    label: 'Начинка',
    options: [
      { id: 'berries', emoji: '🫐', name: 'Ягоды', desc: 'Свежие или замороженные' },
      { id: 'caramel', emoji: '🍮', name: 'Карамель', desc: 'Солёная или классическая' },
      { id: 'nutella', emoji: '🌰', name: 'Ореховая паста', desc: 'Фундук и шоколад' },
      { id: 'fruit', emoji: '🍑', name: 'Фрукты', desc: 'Персик, манго, экзотика' },
      { id: 'curd', emoji: '🧀', name: 'Творожная', desc: 'Нежная и воздушная' },
      { id: 'cherry', emoji: '🍒', name: 'Вишня', desc: 'Классика с кислинкой' },
    ],
  },
  {
    id: 'cream',
    title: 'Какой крем?',
    hint: 'Обволакивает вкус и создаёт идеальную текстуру',
    label: 'Крем',
    options: [
      { id: 'butter', emoji: '🧈', name: 'Масляный', desc: 'Классический крем-чиз' },
      { id: 'cheese', emoji: '🍰', name: 'Сырный', desc: 'Крем-чиз, лёгкий вкус' },
      { id: 'mascarpone', emoji: '✨', name: 'Маскарпоне', desc: 'Итальянская нежность' },
      { id: 'ganache', emoji: '🍫', name: 'Ганаш', desc: 'Шоколадный и глянцевый' },
      { id: 'whipped', emoji: '☁️', name: 'Взбитые сливки', desc: 'Воздушный и лёгкий' },
      { id: 'custard', emoji: '🥛', name: 'Заварной', desc: 'Классика французской школы' },
    ],
  },
  {
    id: 'budget',
    title: 'Какой бюджет?',
    hint: 'Мы подберём вариант под ваши возможности',
    label: 'Бюджет',
    options: [
      { id: 'economy', emoji: '💚', name: 'До 2 000 ₽', desc: 'Домашний, но красивый' },
      { id: 'medium', emoji: '💛', name: '2 000 – 4 000 ₽', desc: 'Оптимальный баланс' },
      { id: 'premium', emoji: '💎', name: 'От 4 000 ₽', desc: 'Премиум-ингредиенты и декор' },
    ],
  },
];

const DESSERT_NAMES = {
  birthday: { vanilla: 'Солнечный праздник', chocolate: 'Шоколадный фейерверк', redvelvet: 'Бархатная мечта', honey: 'Медовый караван', carrot: 'Пряный сюрприз', lemon: 'Лимонный взрыв' },
  wedding: { vanilla: 'Белоснежный шедевр', chocolate: 'Шоколадная элегантность', redvelvet: 'Королевский бархат', honey: 'Золотая свадьба', carrot: 'Осенняя классика', lemon: 'Цитрусовая нежность' },
  romantic: { vanilla: 'Нежность двоих', chocolate: 'Шоколадное признание', redvelvet: 'Сердце в бархате', honey: 'Медовый месяц', carrot: 'Тёплый вечер', lemon: 'Лимонный поцелуй' },
  kids: { vanilla: 'Радужная мечта', chocolate: 'Шоколадный космос', redvelvet: 'Супер-герой', honey: 'Медвежонок', carrot: 'Морковный зайчик', lemon: 'Лимонный динозавр' },
  holiday: { vanilla: 'Зимняя сказка', chocolate: 'Новогодний шоколад', redvelvet: 'Праздничный бархат', honey: 'Медовый праздник', carrot: 'Рождественский пряник', lemon: 'Зимний цитрус' },
  tea: { vanilla: 'Домашний уют', chocolate: 'Шоколадное чаепитие', redvelvet: 'Бархатный полдень', honey: 'Медовый час', carrot: 'Пряный чай', lemon: 'Лимонный полдень' },
};

const FILLING_ADJ = {
  berries: 'с ягодным курдом', caramel: 'с карамельной прослойкой', nutella: 'с орехово-шоколадной начинкой',
  fruit: 'с фруктовым муссом', curd: 'с нежным творожным слоем', cherry: 'с вишнёвым конфи',
};

const CREAM_ADJ = {
  butter: 'на масляном креме', cheese: 'на сырном креме', mascarpone: 'с маскарпоне',
  ganache: 'в ганаше', whipped: 'со взбитыми сливками', custard: 'с заварным кремом',
};

const BUDGET_INFO = {
  economy: { min: 1500, max: 2000, tier: 'Домашний', decor: 'Простой, но аккуратный декор' },
  medium: { min: 2500, max: 4000, tier: 'Стандарт', decor: 'Декор средней сложности, топпер' },
  premium: { min: 4500, max: 8000, tier: 'Премиум', decor: 'Авторский декор, цветы, золото' },
};

const OCCASION_EMOJI = { birthday: '🎂', wedding: '💍', romantic: '💕', kids: '🎈', holiday: '🎄', tea: '☕' };

let currentStep = 0;
const choices = {};

const main = document.getElementById('main');
const progressFill = document.getElementById('progressFill');
const progressSteps = document.getElementById('progressSteps');

function init() {
  renderProgress();
  renderStep();
}

function renderProgress() {
  progressSteps.innerHTML = STEPS.map((step, i) => {
    const cls = i < currentStep ? 'done' : i === currentStep ? 'active' : '';
    return `<div class="progress__step ${cls}" data-step="${i}">
      <span class="progress__step-dot"></span>
      <span>${step.label}</span>
    </div>`;
  }).join('');

  const pct = currentStep >= STEPS.length ? 100 : (currentStep / STEPS.length) * 100;
  progressFill.style.width = `${pct}%`;
}

function renderStep() {
  if (currentStep >= STEPS.length) {
    renderResult();
    return;
  }

  const step = STEPS[currentStep];
  const selected = choices[step.id];

  main.innerHTML = `
    <section class="step" aria-label="Шаг ${currentStep + 1}">
      <div class="step__heading">
        <div class="step__number">Шаг ${currentStep + 1} из ${STEPS.length}</div>
        <h2 class="step__title">${step.title}</h2>
        <p class="step__hint">${step.hint}</p>
      </div>
      <div class="cards" role="listbox" aria-label="${step.title}">
        ${step.options.map(opt => `
          <div class="card ${selected === opt.id ? 'selected' : ''}"
               role="option"
               aria-selected="${selected === opt.id}"
               data-id="${opt.id}"
               tabindex="0">
            <span class="card__check" aria-hidden="true">✓</span>
            <span class="card__emoji">${opt.emoji}</span>
            <div class="card__name">${opt.name}</div>
            <div class="card__desc">${opt.desc}</div>
          </div>
        `).join('')}
      </div>
      <div class="nav">
        <button class="btn btn--back" id="btnBack" ${currentStep === 0 ? 'disabled' : ''}>← Назад</button>
        <button class="btn btn--next" id="btnNext" ${!selected ? 'disabled' : ''}>
          ${currentStep === STEPS.length - 1 ? 'Узнать результат' : 'Далее →'}
        </button>
      </div>
    </section>
  `;

  main.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => selectOption(step.id, card.dataset.id));
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        selectOption(step.id, card.dataset.id);
      }
    });
  });

  document.getElementById('btnBack').addEventListener('click', goBack);
  document.getElementById('btnNext').addEventListener('click', goNext);

  renderProgress();
}

function selectOption(stepId, optionId) {
  choices[stepId] = optionId;
  renderStep();
}

function goBack() {
  if (currentStep > 0) {
    currentStep--;
    renderStep();
  }
}

function goNext() {
  if (choices[STEPS[currentStep].id]) {
    currentStep++;
    renderStep();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function getOptionName(stepId, optionId) {
  const step = STEPS.find(s => s.id === stepId);
  const opt = step?.options.find(o => o.id === optionId);
  return opt ? opt.name : '';
}

function generateDessert() {
  const { occasion, biscuit, filling, cream, budget } = choices;
  const name = DESSERT_NAMES[occasion]?.[biscuit] || 'Авторский десерт';
  const fillingAdj = FILLING_ADJ[filling] || '';
  const creamAdj = CREAM_ADJ[cream] || '';
  const budgetInfo = BUDGET_INFO[budget];
  const emoji = OCCASION_EMOJI[occasion] || '🍰';

  const descriptions = {
    birthday: `Торт «${name}» — идеальный выбор для праздника! ${getOptionName('biscuit', biscuit)} бисквит ${fillingAdj} ${creamAdj} создают яркий и запоминающийся вкус, который понравится гостям всех возрастов.`,
    wedding: `«${name}» — изысканный свадебный торт. Сочетание ${getOptionName('biscuit', biscuit).toLowerCase()} бисквита ${fillingAdj} ${creamAdj} подчеркнёт торжественность вашего дня. Элегантный декор дополнит атмосферу праздника.`,
    romantic: `«${name}» создан для романтического вечера. Нежный ${getOptionName('biscuit', biscuit).toLowerCase()} бисквит ${fillingAdj} ${creamAdj} — это десерт, который говорит о чувствах без слов.`,
    kids: `Торт «${name}» покорит маленьких гостей! Вкусный ${getOptionName('biscuit', biscuit).toLowerCase()} бисквит ${fillingAdj} ${creamAdj} и яркий декор сделают праздник незабываемым.`,
    holiday: `«${name}» — праздничный десерт с душой. ${getOptionName('biscuit', biscuit)} основа ${fillingAdj} ${creamAdj} наполнит дом атмосферой праздника и тепла.`,
    tea: `«${name}» — уютный десерт для чаепития. Лёгкий ${getOptionName('biscuit', biscuit).toLowerCase()} бисквит ${fillingAdj} ${creamAdj} идеально сочетается с чашкой ароматного чая.`,
  };

  const taglines = {
    birthday: 'Сладкий праздник начинается здесь',
    wedding: 'Ваш особенный день заслуживает особенного торта',
    romantic: 'Любовь сладкая — как этот десерт',
    kids: 'Счастье, которое можно съесть',
    holiday: 'Вкус праздника в каждом кусочке',
    tea: 'Домашний уют в каждом слое',
  };

  return {
    name,
    emoji,
    tagline: taglines[occasion],
    description: descriptions[occasion],
    specs: [
      { label: 'Повод', value: getOptionName('occasion', occasion) },
      { label: 'Бисквит', value: getOptionName('biscuit', biscuit) },
      { label: 'Начинка', value: getOptionName('filling', filling) },
      { label: 'Крем', value: getOptionName('cream', cream) },
      { label: 'Уровень', value: budgetInfo.tier },
      { label: 'Декор', value: budgetInfo.decor },
    ],
    priceMin: budgetInfo.min,
    priceMax: budgetInfo.max,
  };
}

function renderResult() {
  const dessert = generateDessert();

  progressFill.style.width = '100%';
  progressSteps.querySelectorAll('.progress__step').forEach(s => s.classList.add('done'));

  main.innerHTML = `
    <section class="result" aria-label="Ваш идеальный десерт">
      <div class="result__card">
        <div class="result__hero">
          <span class="result__emoji">${dessert.emoji}</span>
          <h2 class="result__name">${dessert.name}</h2>
          <p class="result__tagline">${dessert.tagline}</p>
        </div>
        <div class="result__body">
          <p class="result__description">${dessert.description}</p>
          <div class="result__specs">
            ${dessert.specs.map(s => `
              <div class="result__spec">
                <div class="result__spec-label">${s.label}</div>
                <div class="result__spec-value">${s.value}</div>
              </div>
            `).join('')}
          </div>
          <div class="result__price">
            <span class="result__price-label">Ориентировочная стоимость:</span>
            <span class="result__price-value">${dessert.priceMin.toLocaleString('ru-RU')} – ${dessert.priceMax.toLocaleString('ru-RU')} ₽</span>
          </div>
          <p class="result__price-note">* Точная цена зависит от веса, размера и сложности декора</p>
        </div>
      </div>
      <div class="result__actions">
        <button class="btn btn--outline" id="btnRestart">Собрать заново</button>
        <button class="btn btn--primary" id="btnOrder">Заказать этот десерт</button>
      </div>
    </section>
  `;

  document.getElementById('btnRestart').addEventListener('click', restart);
  document.getElementById('btnOrder').addEventListener('click', () => {
    const msg = encodeURIComponent(`Здравствуйте! Хочу заказать десерт «${dessert.name}» (${dessert.priceMin}–${dessert.priceMax} ₽)`);
    window.open(`https://wa.me/?text=${msg}`, '_blank');
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function restart() {
  currentStep = 0;
  Object.keys(choices).forEach(k => delete choices[k]);
  renderStep();
}

init();
