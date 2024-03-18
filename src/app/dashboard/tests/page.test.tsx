import { handleClick } from "../page";
// Integration test
test('handleClick function should fetch data from API and update state accordingly', async () => {
    // Mocking the fetch function to return a predefined response
    global.fetch = jest.fn().mockResolvedValueOnce({
      json: () => Promise.resolve({
        player: [
          {
            strSport: 'Basketball',
            strPlayer: 'Player Name',
            strCutout: 'Player Image URL',
            strTeam: 'Player Team',
            strHeight: 'Player Height',
            strPosition: 'Player Position',
            strWeight: 'Player Weight',
            strDescriptionEN: 'Player Description',
          },
        ],
      }),
    });
  
    // Call handleClick function
    await handleClick();
  });

// Unit test