const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {

  if (!sampleActivity || typeof sampleActivity !== 'string') return false
  const _sampleActivity = parseFloat(sampleActivity)
  if (_sampleActivity <= 0 || _sampleActivity > MODERN_ACTIVITY || isNaN(_sampleActivity) ) return false
  const k = 0.693 / HALF_LIFE_PERIOD
  return Math.ceil(Math.log(MODERN_ACTIVITY / _sampleActivity) / k)
}
