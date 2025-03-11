import React from "react";
import {
  ScatterChart,
  CartesianGrid,
  XAxis,
  YAxis,
  ZAxis,
  Tooltip,
  Legend,
  Label,
  Scatter,
  LabelList,
  ResponsiveContainer,
} from "recharts";

//props contain wordsList
export default function ScatterPlot(props) {
  //make into array of objects with word, heScore, sheScore
  const selected = props.wordsList.reduce((selected, sect) => {
    //do nothing if it's plain text
    if (!sect.plain)
      selected.push({
        word: sect.changeable[sect.displayed],
        heScore: sect.heScores[sect.displayed].toFixed(2),
        sheScore: sect.sheScores[sect.displayed].toFixed(2),
      });
    return selected;
  }, []);

  //filter selected into just the ones with heScore -sheScore > 5
  const heSelected = selected.filter(
    (wordObj) => wordObj.heScore - wordObj.sheScore > 5
  );
  //filter just heScore - sheScore  < 5
  const sheSelected = selected.filter(
    (wordObj) => wordObj.heScore - wordObj.sheScore < 5
  );

  /*If the heScore/sheScore are within 5% of each other */
  const equalSelected = selected.filter(
    (wordObj) =>
      wordObj.heScore - wordObj.sheScore <= 5 &&
      wordObj.heScore - wordObj.sheScore >= -5
  );

  // use tooltip to collapse words on top off each other into 1 pop-up
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      // Find all words that match the current heScore and sheScore
      const { heScore, sheScore } = payload[0].payload;
      const matchingWords = selected.filter(
        (wordObj) =>
          wordObj.heScore === heScore && wordObj.sheScore === sheScore
      );

      return (
        <div
          style={{
            background: "white",
            padding: "10px",
            border: "1px solid #ccc",
          }}
        >
          <p>
            <strong>He Similarity:</strong> {heScore}%
          </p>
          <p>
            <strong>She Similarity:</strong> {sheScore}%
          </p>
          <p>
            <strong>Words:</strong>
          </p>
          <ul>
            {matchingWords.map((wordObj, index) => (
              <li key={index}>{wordObj.word}</li>
            ))}
          </ul>
        </div>
      );
    }
    return null;
  };

  const listOfScatters = [];
  //append heLeaning words
  listOfScatters.push(
    <Scatter name='"He" Words' data={heSelected} fill="#4287f5">
      <LabelList dataKey="word" position="outside" offset={8} />
    </Scatter>
  );

  //append sheLeaning words
  listOfScatters.push(
    <Scatter name='"She" Words' data={sheSelected} fill="#ffa6e9">
      <LabelList dataKey="word" position="outside" offset={8} />
    </Scatter>
  );

  //append neutral words
  listOfScatters.push(
    <Scatter name="Neutral Words" data={equalSelected} fill="#9e9e9e">
      <LabelList dataKey="word" position="outside" offset={8} />
    </Scatter>
  );

  return (
    <ResponsiveContainer width="100%" height={400}>
      <ScatterChart
        width={500}
        height={300}
        margin={{ top: 20, right: 20, bottom: 40, left: 30 }}
      >
        <XAxis
          dataKey="heScore"
          name="He Similarity"
          unit="%"
          type="number"
          domain={[0, 100]}
        >
          <Label value="Similarity to He" position="bottom" offset={10} />
        </XAxis>

        <YAxis
          dataKey="sheScore"
          name="She Similarity"
          unit="%"
          domain={[0, 100]}
        >
          <Label
            value="Similarity to She"
            angle={270}
            position="left"
            offset={10}
            dy={-60}
          />
        </YAxis>
        <ZAxis dataKey="word" name="Word" />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip
          content={<CustomTooltip />}
          cursor={{ strokeDasharray: "3 3" }}
        />
        <Scatter
          data={[
            { heScore: 0, sheScore: 0 },
            { heScore: 100, sheScore: 100 },
          ]}
          line={{ stroke: "#CCCCCC", strokeDasharray: "3 3" }}
          fill="none"
          shape="none"
        />
        <Legend wrapperStyle={{ marginTop: "100px", marginBottom: "-40px" }} />
        {listOfScatters}
      </ScatterChart>
    </ResponsiveContainer>
  );
}
