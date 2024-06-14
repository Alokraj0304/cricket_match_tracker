// fetch('https://cricbuzz-cricket.p.rapidapi.com/matches/v1/recent',{
// 	"method": 'GET',
// 	"headers": {
// 		'x-rapidapi-key': '8fdbfb1b7amsh11feb68c1fbd024p11178djsnddb9a3c4afd2',
// 		'x-rapidapi-host': 'cricbuzz-cricket.p.rapidapi.com'
// 	}
// })


// .then(response=>response.json())
// .then(response=>{
//     console.log(response);
    
// })

// .catch(err=>{
//     console.log(err);
// })

document.addEventListener('DOMContentLoaded', function() {
    const apiKey = '8fdbfb1b7amsh11feb68c1fbd024p11178djsnddb9a3c4afd2'; 
    const apiUrl = 'https://cricbuzz-cricket.p.rapidapi.com/matches/v1/recent'; 
    async function fetchScores() {
        try {
            const response = await fetch(apiUrl, {
                headers: {
                    'x-rapidapi-key': '8fdbfb1b7amsh11feb68c1fbd024p11178djsnddb9a3c4afd2',
		            'x-rapidapi-host': 'cricbuzz-cricket.p.rapidapi.com',
	
                }
            });
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            const data = await response.json();
            displayScores(data);
        } catch (error) {
            console.error('Error fetching scores:', error);
        }
    }
    function displayScores(data) {
        console.log(data);
        const matches = data.typeMatches[0].seriesMatches[0].seriesAdWrapper.matches;

        if (matches && matches.length > 0) {
            document.getElementById('box13').textContent = `${matches[0].matchInfo.team1.teamName} vs ${matches[0].matchInfo.team2.teamName}:  ${matches[0].matchInfo.status}`;
            
            document.getElementById('box14').textContent = `${matches[1].matchInfo.team1.teamName} vs ${matches[1].matchInfo.team2.teamName}:  ${matches[1].matchInfo.status}`;
            document.getElementById('box15').textContent = `${matches[2].matchInfo.team1.teamName} vs ${matches[2].matchInfo.team2.teamName}: ${matches[2].matchInfo.status}`;
            document.getElementById('box16').textContent = `${matches[3].matchInfo.team1.teamName} vs ${matches[3].matchInfo.team2.teamName}: ${matches[3].matchInfo.status}`;
            document.getElementById('box17').textContent = `${matches[4].matchInfo.team1.teamName} vs ${matches[4].matchInfo.team2.teamName}: ${matches[4].matchInfo.status}`;
            document.getElementById('box18').textContent = `${matches[5].matchInfo.team1.teamName} vs ${matches[5].matchInfo.team2.teamName}: ${matches[5].matchInfo.status}`;
            document.getElementById('box19').textContent = `${matches[6].matchInfo.team1.teamName} vs ${matches[6].matchInfo.team2.teamName}: ${matches[6].matchInfo.status}`;
            document.getElementById('box20').textContent = `${matches[7].matchInfo.team1.teamName} vs ${matches[7].matchInfo.team2.teamName}: ${matches[7].matchInfo.status}`;
        } else {
            console.error('No matches found');
            
        }
    }

    fetchScores();
});
