<script>
    let pollQuestion = "What is your favorite color?";
    let pollChoices = [
      "Red",
      "Green",
      "Blue",
      "Yellow"
    ];
    let pollResults = [];
  
    function handleVote(event) {
      let selectedChoice = event.target.value;
      let choiceIndex = pollChoices.indexOf(selectedChoice);
  
      // Initialize the poll results array if it's empty
      if (!pollResults.length) {
        for (let i = 0; i < pollChoices.length; i++) {
          pollResults.push(0);
        }
      }
  
      // Increment the vote count for the selected choice
      pollResults[choiceIndex]++;
    }
  </script>
  
  <h1>{pollQuestion}</h1>
  
  <form>
    {#each pollChoices as choice}
      <label>
        <input type="radio" value={choice} on:change={handleVote} />
        {choice}
      </label>
      <br />
    {/each}
  
    <button type="submit">Submit</button>
  </form>
  
  {#if pollResults.length}
    <h2>Poll Results:</h2>
    <ul>
      {#each pollResults as result, index}
        <li>{pollChoices[index]}: {result}</li>
      {/each}
    </ul>
  {/if}
  