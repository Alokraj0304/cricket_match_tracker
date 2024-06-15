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
    const apiKey = '3ce525b80bmsh677deecb6dcb71bp1e9ba8jsn6fbd42ce2cc9'; 
    const apiUrl = 'https://cricbuzz-cricket.p.rapidapi.com/matches/v1/recent'; 
    async function fetchScores() {
        try {
            const response = await fetch(apiUrl, {
                headers: {
                    'x-rapidapi-key': '8fdbfb1b7amsh11feb68c1fbd024p11178djsnddb9a3c4afd2',
		            'x-rapidapi-host': 'cricbuzz-cricket.p.rapidapi.com'
	
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
            document.getElementById('boxx13').textContent = `${matches[0].matchInfo.team1.teamName} vs ${matches[0].matchInfo.team2.teamName}:  ${matches[0].matchInfo.status}`;
            document.getElementById('boxx14').textContent = `${matches[1].matchInfo.team1.teamName} vs ${matches[1].matchInfo.team2.teamName}:  ${matches[1].matchInfo.status}`;
            document.getElementById('boxx15').textContent = `${matches[2].matchInfo.team1.teamName} vs ${matches[2].matchInfo.team2.teamName}: ${matches[2].matchInfo.status}`;
            document.getElementById('boxx16').textContent = `${matches[3].matchInfo.team1.teamName} vs ${matches[3].matchInfo.team2.teamName}: ${matches[3].matchInfo.status}`;
            document.getElementById('boxx17').textContent = `${matches[4].matchInfo.team1.teamName} vs ${matches[4].matchInfo.team2.teamName}: ${matches[4].matchInfo.status}`;
            document.getElementById('boxx18').textContent = `${matches[5].matchInfo.team1.teamName} vs ${matches[5].matchInfo.team2.teamName}: ${matches[5].matchInfo.status}`;
            document.getElementById('boxx19').textContent = `${matches[6].matchInfo.team1.teamName} vs ${matches[6].matchInfo.team2.teamName}: ${matches[6].matchInfo.status}`;
            document.getElementById('boxx20').textContent = `${matches[7].matchInfo.team1.teamName} vs ${matches[7].matchInfo.team2.teamName}: ${matches[7].matchInfo.status}`;
            document.getElementById('boxx21').textContent = `${matches[8].matchInfo.team1.teamName} vs ${matches[8].matchInfo.team2.teamName}:  ${matches[8].matchInfo.status}`;
            document.getElementById('boxx22').textContent = `${matches[9].matchInfo.team1.teamName} vs ${matches[9].matchInfo.team2.teamName}:  ${matches[9].matchInfo.status}`;
            document.getElementById('boxx23').textContent = `${matches[10].matchInfo.team1.teamName} vs ${matches[10].matchInfo.team2.teamName}: ${matches[10].matchInfo.status}`;
            document.getElementById('boxx24').textContent = `${matches[11].matchInfo.team1.teamName} vs ${matches[11].matchInfo.team2.teamName}: ${matches[11].matchInfo.status}`;
            document.getElementById('boxx25').textContent = `${matches[12].matchInfo.team1.teamName} vs ${matches[12].matchInfo.team2.teamName}: ${matches[12].matchInfo.status}`;
            document.getElementById('boxx26').textContent = `${matches[13].matchInfo.team1.teamName} vs ${matches[13].matchInfo.team2.teamName}: ${matches[13].matchInfo.status}`;
            document.getElementById('boxx27').textContent = `${matches[14].matchInfo.team1.teamName} vs ${matches[14].matchInfo.team2.teamName}: ${matches[14].matchInfo.status}`;
            document.getElementById('boxx28').textContent = `${matches[15].matchInfo.team1.teamName} vs ${matches[15].matchInfo.team2.teamName}: ${matches[15].matchInfo.status}`;
        } else {
            console.error('No matches found');
            
        }
        if (matches && matches.length > 0) {
            document.getElementById('one').textContent = `${matches[0].matchInfo.team1.teamSName} vs ${matches[0].matchInfo.team2.teamSName}`;
            document.getElementById('two').textContent = `${matches[1].matchInfo.team1.teamSName} vs ${matches[1].matchInfo.team2.teamSName}`;
            document.getElementById('three').textContent = `${matches[2].matchInfo.team1.teamSName} vs ${matches[2].matchInfo.team2.teamSName}`;
            document.getElementById('four').textContent = `${matches[3].matchInfo.team1.teamSName} vs ${matches[3].matchInfo.team2.teamSName}`;
            document.getElementById('five').textContent = `${matches[4].matchInfo.team1.teamSName} vs ${matches[4].matchInfo.team2.teamSName}`;
            document.getElementById('six').textContent = `${matches[5].matchInfo.team1.teamSName} vs ${matches[5].matchInfo.team2.teamSName}`;
            document.getElementById('seven').textContent = `${matches[6].matchInfo.team1.teamSName} vs ${matches[6].matchInfo.team2.teamSName}`;
            document.getElementById('eight').textContent = `${matches[7].matchInfo.team1.teamSName} vs ${matches[7].matchInfo.team2.teamSName}`;
           
        } else {
            console.error('No matches found');
            
        }
    }

    fetchScores();
});

