import NumberTicker from "../../../../components/ui/number-ticker";
import "./Stats.css";
export function Stats() {
  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-wrapper">
          <div className="stats-in-wrapper">
            <p className="whitespace-pre-wrap text-8xl font-medium tracking-tighter text-black dark:text-white">
              <NumberTicker value={100} />+
            </p>
            <p className="text-4xl  mt-1">Tugatgan Loyihalarimiz</p>
          </div>
          <div className="stats-in-wrapper">
            <div className="stats-in-wrapper">
              <p className="whitespace-pre-wrap text-8xl font-medium tracking-tighter text-black dark:text-white">
                <NumberTicker value={95} />%
              </p>
              <p className="text-4xl  mt-1">Tugatgan Loyihalarimiz</p>
            </div>
          </div>
          <div className="stats-in-wrapper">
            <p className="whitespace-pre-wrap text-8xl font-medium tracking-tighter text-black dark:text-white">
              <NumberTicker value={22} />+
            </p>
            <p className="text-4xl mt-1">Tajriba</p>
          </div>
        </div>
      </div>
    </section>
  );
}
