function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <div>
      <p>гарних: {good}</p>
      <p>середніх: {neutral}</p>
      <p>поганих: {bad}</p>
      <p>всього: {total}</p>
      <p>позитивних(%): {positivePercentage}</p>
    </div>
  );
}

export default Statistics;