import { React, useState, useEffect } from "react";

export function SettingsView(props) {
  //TODO: make it so that only skills that actually exist in all three shapes get printed
  //or just make the data that way
  //TODO: add DDs to the JSON file
  //altnames + shapes with ternary expression

  const [settings, changeSettings] = useState({
    maxTotalDD: 4.0,
    maxMountDD: 1.0,
    maxSpotterDD: 1.0,
    maxDismountDD: 1.0,
    noRepeat: true,
    spotters: true,
    blindLandings: false,
    blindMounts: false,
    blindSpotters: false,
  });

  useEffect(() => {
    //get the current settings
    //loop through each setting
    //get list of filter functions
    //apply each to the data passed down (prop)
    //use the (prop) mutator to change the value
    let mounts = props.rawData;
    let dismounts = props.rawData;

    // //filter for no repeat (search history)
    // if (settings.noRepeat) {
    //   mounts = mounts.filter(
    //     (el) => !props.history.map((el2) => el2[0].name).includes(el.name)
    //   );
    //   dismounts = dismounts.filter(
    //     (el) => !props.history.map((el2) => el2[1].name).includes(el.name)
    //   );
    // }

    //filter spotters and handles DD
    if (!settings.spotters) {
      mounts = mounts.filter((el) => el.direction === "forward");
      mounts = mounts.filter((el) => el.dd <= settings.maxMountDD);
    } else {
      mounts = mounts.filter((el) => {
        if (el.direction === "forward") {
          return el.dd <= settings.maxMountDD;
        } else {
          return el.dd <= settings.maxSpotterDD;
        }
      });
    }

    dismounts = dismounts.filter((el) => el.dd <= settings.maxDismountDD);

    //TODO: filter for total DD

    //filter blind landings
    if (!settings.blindLandings) {
      dismounts = dismounts.filter((el) => !el.blind);
    }

    //filter blind mounts or spotters
    if (!settings.blindLandings || !settings.blindSpotters) {
      mounts = mounts.filter((el) => !el.blind);
    }
    props.setUsableSkills([mounts, dismounts, settings.maxTotalDD]);
  }, [settings]);

  return (
    <div>
      <div id="settingsHolder">
        <div className="settingsTitle">
          <h2>Settings</h2>
        </div>
      </div>
      <div id="settingsBody">
        <div id="settingsTextInputContainer">
          <input
            id="maxTotalDDinput"
            className="settingsTextInput"
            type="number"
            placeholder="Max routine DD"
            step={0.1}
            onBlur={(e) => {
              changeSettings({ ...settings, maxTotalDD: e.target.value });
            }}
            defaultValue={settings.maxDD}
          ></input>
          <div id="settingsTextSubInputs">
            <input
              id="maxMountDDInput"
              className="settingsTextInput"
              type="number"
              placeholder="Max mount DD"
              step={0.1}
              onBlur={(e) => {
                changeSettings({ ...settings, maxMountDD: e.target.value });
              }}
              defaultValue={settings.maxDD}
            ></input>

            <input
              id="maxSpotterDDInput"
              className="settingsTextInput"
              type="number"
              placeholder="Max spotter dd"
              step={0.1}
              onBlur={(e) => {
                changeSettings({ ...settings, maxSpotterDD: e.target.value });
              }}
              defaultValue={settings.maxDD}
            ></input>
            <input
              id="maxDismountDDInput"
              className="settingsTextInput"
              type="number"
              placeholder="Max dismount dd"
              step={0.1}
              onBlur={(e) => {
                changeSettings({ ...settings, maxDismountDD: e.target.value });
              }}
              defaultValue={settings.maxDD}
            ></input>
          </div>
        </div>
        <ul id="checkboxList">
          {/* TODO: figure out how to do the history efficiently
          <li>
            <label className="container">
              <input
                className="checkbox"
                type="checkbox"
                checked={settings.noRepeat}
                onClick={() =>
                  changeSettings({ ...settings, noRepeat: !settings.noRepeat })
                }
              />
              Don't repeat skills
              <span class="checkmark"></span>
            </label>
          </li> */}
          <li>
            <label className="container">
              <input
                className="checkbox"
                type="checkbox"
                checked={settings.spotters}
                onClick={() => {
                  if (settings.blindSpotters && settings.spotters) {
                    changeSettings({
                      ...settings,
                      blindSpotters: false,
                      spotters: false,
                    });
                  } else {
                    changeSettings({
                      ...settings,
                      spotters: !settings.spotters,
                    });
                  }
                }}
              />
              Spotters
              <span class="checkmark"></span>
            </label>
          </li>
          <li>
            <label className="container">
              <input
                className="checkbox"
                type="checkbox"
                checked={settings.blindLandings}
                onClick={() =>
                  changeSettings({
                    ...settings,
                    blindLandings: !settings.blindLandings,
                  })
                }
              />
              Blind landings
              <span class="checkmark"></span>
            </label>
          </li>
          <li>
            <label className="container">
              <input
                className="checkbox"
                type="checkbox"
                checked={settings.blindMounts}
                onClick={() =>
                  changeSettings({
                    ...settings,
                    blindMounts: !settings.blindMounts,
                  })
                }
              />
              Blind mounts
              <span class="checkmark"></span>
            </label>
          </li>
          <li>
            <label className="container">
              <input
                className="checkbox"
                type="checkbox"
                checked={settings.blindSpotters}
                onClick={() => {
                  if (!(!settings.spotters && !settings.blindSpotters)) {
                    changeSettings({
                      ...settings,
                      blindSpotters: !settings.blindSpotters,
                    });
                  }
                }}
              />
              Blind spotters
              <span className="checkmark"></span>
            </label>
          </li>
        </ul>
      </div>
      {/* <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">Check</TableCell>
              <TableCell align="right">String</TableCell>
              <TableCell align="right">Skill</TableCell>
              <TableCell align="right">DD</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, i) => (
              <TableRow
                key={`row${i}-1`}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="right">{<Checkbox></Checkbox>}</TableCell>
                <TableCell align="right">{row.FIGString}</TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.dd}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer> */}
    </div>
  );
}

export default SettingsView;
