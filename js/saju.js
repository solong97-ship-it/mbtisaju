/* ╔══════════════════════════════════════════╗
   ║  Saju Engine Logic                       ║
   ╚══════════════════════════════════════════╝ */
import { JG, JG_BI, JG_BR, SH, BH } from '../src/constants.js';

export function parseYear(yy) {
  return yy <= 26 ? 2000 + yy : 1900 + yy;
}

export function getSajuYear(y, m, d) {
  return (m < 2 || (m === 2 && d < 4)) ? y - 1 : y;
}

export function getMonthPillar(m, d) {
  let bi = 10, br = 0;
  for (let i = 0; i < JG.length; i++) {
    const [jm, jd] = JG[i];
    if (m > jm || (m === jm && d >= jd)) {
      bi = JG_BI[i];
      br = JG_BR[i];
    }
  }
  return { bi, br };
}

export function getNatal(year, month, day) {
  const sy = getSajuYear(year, month, day);
  const yS = ((sy - 4) % 10 + 10) % 10, yB = ((sy - 4) % 12 + 12) % 12;
  const jm = getMonthPillar(month, day);
  const mBase = [2, 4, 6, 8, 0, 2, 4, 6, 8, 0];
  const mS = (mBase[yS] + jm.bi) % 10, mB = jm.br;
  const ref = new Date(1900, 0, 1);
  const days = Math.round((new Date(year, month - 1, day) - ref) / 86400000);
  const dS = ((days % 10) + 10) % 10, dB = ((10 + (days % 12)) % 12 + 12) % 12;
  return { yS, yB, mS, mB, dS, dB, sy };
}

export function getTenGod(dayStemIdx, targetStemIdx) {
  const me = Math.floor(dayStemIdx / 2), tgt = Math.floor(targetStemIdx / 2);
  const sameYY = (dayStemIdx % 2) === (targetStemIdx % 2);
  if (me === tgt) return sameYY ? '비견' : '겁재';
  if ((me + 1) % 5 === tgt) return sameYY ? '식신' : '상관';
  if ((me + 2) % 5 === tgt) return sameYY ? '편재' : '정재';
  if ((me + 3) % 5 === tgt) return sameYY ? '편관' : '정관';
  if ((me + 4) % 5 === tgt) return sameYY ? '편인' : '정인';
  return '비견';
}

export function hRead(hStr) {
  const d2 = {
    '甲': '갑', '乙': '을', '丙': '병', '丁': '정', '戊': '무', '己': '기', '庚': '경', '辛': '신', '壬': '임', '癸': '계',
    '子': '자', '丑': '축', '寅': '인', '卯': '묘', '辰': '진', '巳': '사', '午': '오', '未': '미', '申': '신', '酉': '유', '戌': '술', '亥': '해'
  };
  let han = '', rd = '';
  for (let c of hStr) {
    han += c;
    rd += d2[c] || '';
  }
  return han + `(${rd})`;
}
