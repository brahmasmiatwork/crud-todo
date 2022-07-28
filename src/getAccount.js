console.log("INITIATING WEB3 CONNECTION");

async function loadweb3() {
          console.log("Loading web3...");
        if (typeof web3 !== 'undefined') {
          web3Provider = web3.currentProvider
          web3 = new Web3(web3.currentProvider)
        } else {
          window.alert("Please connect to Metamask.")
        }
        // Modern dapp browsers...
        if (window.ethereum) {
          window.web3 = new Web3(ethereum)
          try {
            // Request account access if needed
            await ethereum.enable()
            // Acccounts now exposed
            web3.eth.sendTransaction({/* ... */})
          } catch (error) {
            // User denied account access...
          }
        }
        // Legacy dapp browsers...
        // else if (window.web3) {
        //   web3Provider = web3.currentProvider
        //   window.web3 = new Web3(web3.currentProvider)
        //   // Acccounts always exposed
        //   web3.eth.sendTransaction({/* ... */})
        // }
        // Non-dapp browsers...
        else {
          console.log('Non-Ethereum browser detected. You should consider trying MetaMask!')
        }
      }

async function getAccount() {
  console.log("Loading account...");

  let accounts = await web3.eth.getAccounts();
    web3.eth.defaultAccount = accounts[0];
    console.log(web3.eth.defaultAccount + ' account detected');
    return web3.eth.defaultAccount;
}

// App = {
  
//     // https://medium.com/metamask/https-medium-com-metamask-breaking-change-injecting-web3-7722797916a8
//     Web3: async () => {
//         console.log("Loading web3...");
//       if (typeof web3 !== 'undefined') {
//         App.web3Provider = web3.currentProvider
//         web3 = new Web3(web3.currentProvider)
//       } else {
//         window.alert("Please connect to Metamask.")
//       }
//       // Modern dapp browsers...
//       if (window.ethereum) {
//         window.web3 = new Web3(ethereum)
//         try {
//           // Request account access if needed
//           await ethereum.enable()
//           // Acccounts now exposed
//           web3.eth.sendTransaction({/* ... */})
//         } catch (error) {
//           // User denied account access...
//         }
//       }
//       // Legacy dapp browsers...
//       else if (window.web3) {
//         App.web3Provider = web3.currentProvider
//         window.web3 = new Web3(web3.currentProvider)
//         // Acccounts always exposed
//         web3.eth.sendTransaction({/* ... */})
//       }
//       // Non-dapp browsers...
//       else {
//         console.log('Non-Ethereum browser detected. You should consider trying MetaMask!')
//       }
//     },
  
  
    // ,
  
//     loadContract: async () => {
//         console.log("Loading contract...");

//       // Create a JavaScript version of the smart contract
//       const todoList = await $.getJSON('Bloc.json')
//       console.log(todoList);
//       App.contracts.TodoList = TruffleContract(todoList)
//       App.contracts.TodoList.setProvider(App.web3Provider)
//       console.log(App.web3Provider);
  
//       // Hydrate the smart contract with values from the blockchain
//       App.todoList = await App.contracts.TodoList.deployed()
//       console.log(App.todoList);
//     },
  
//     render: async () => {
//         console.log("Rendering...");


//       // Prevent double render
//       if (App.loading) {
//         return
//       }
  
//       // Update app loading state
//       App.setLoading(true)
  
//       // Render Account
//       $('#account').html(App.account)
  
//       // Render Tasks
//       await App.renderTasks()
  
//       // Update loading state
//       App.setLoading(false)
//     },
  
//     renderTasks: async () => {
//         console.log("Rendering tasks ...");


//       // Load the total task count from the blockchain
//       const raceCount = await App.todoList.raceCount()
//       console.log("raceCount =", raceCount.toNumber());
//       const $taskTemplate = $('.taskTemplate')
  
//       // Render out each task with a new task template
//       for (var i = 1; i <= raceCount; i++) {
//         // Fetch the task data from the blockchain
//         const racing = await App.todoList.Race(i)
//         App.racingID = racing[0].toNumber()
//         const racingEvent = racing[1]
//         const racingEventType = racing[2]
//         const racingDistance = racing[3].toNumber()
//         const racingEntryFee = racing[4]
//         const racingPrizePool = racing[5].toNumber()
//         const racingRegistered = racing[6]
//         const racingStatus = racing[7]

//   console.log("racingStatus =", racingStatus);

//       // Create the html for the task
//       const $newTaskTemplate = $taskTemplate.clone()
//       $newTaskTemplate.find('.content1').html(racingEvent)
//       $newTaskTemplate.find('.content2').html(racingEventType)
//       $newTaskTemplate.find('.content3').html(racingDistance)
//       $newTaskTemplate.find('.content4').html(racingEntryFee)
//       $newTaskTemplate.find('.content5').html(racingPrizePool)
//       $newTaskTemplate.find('.content6').html(racingRegistered)

//   if(racingStatus == true){
//     $newTaskTemplate.find('.content7').html("Active")
//   }
//   else{
//     $newTaskTemplate.find('.content7').html("InActive")

//   }   

//   $newTaskTemplate.find('input')                      
//                   .prop('name', App.racingID)
//                   .prop('checked', racingStatus)
//                   .on('click', App.toggleCompleted)

//     //save data in DB
    
   
//     var request = $.ajax({
//       url: "saveRace.php",
//       type: "POST",
//       data: {
//             functionType : 'saveRace',       
//             racingEvent : racingEvent,
//             racingEventType : racingEventType, 
//             racingDistance : racingDistance,
//             racingEntryFee : racingEntryFee,
//             racingPrizePool : racingPrizePool,
//             racingRegistered : racingRegistered,
//           },
//       // dataType: "html"
//     });

//     request.done(function(msg) {
//       console.log(msg);
//       // $("#log").html( msg );
//     });

//     request.fail(function(jqXHR, textStatus) {
//       console.log( "Request failed: " + textStatus );
//     });
      

//       // Put the task in the correct list
//       if (racingStatus) {
//         $('#completedTaskList').append($newTaskTemplate)
//       } else {
//         $('#taskList').append($newTaskTemplate)
//       }

//       // Show the task
//       $newTaskTemplate.show()
//     }
//   },
  
//     createTask: async () => {
//         console.log("Creating task...");

//       App.setLoading(true)
//     const eventName = $('#eventName').val()
//     const eventType = $('#eventType').val()
//     const distance = $('#distance').val()
//     const entryFee = $('#entryFee').val()
//     const prizePool = $('#prizePool').val()
//     const registered = $('#registered').val()
//     await App.todoList.createRace(eventName,eventType, distance,entryFee, prizePool,registered)
  
//   window.location.reload()
// },
  
//     toggleCompleted: async (e) => {
//         console.log("Toggling race status...");

//       App.setLoading(true)
//     //   const racingID = e.target.name
//       await App.todoList.raceCompleted(App.racingID,  { from:  App.account})
//       window.location.reload()
//     },
  
//     setLoading: (boolean) => {
//       App.loading = boolean
//       const loader = $('#loader')
//       const content = $('#content')
//       if (boolean) {
//         loader.show()
//         content.hide()
//       } else {
//         loader.hide()
//         content.show()
//       }
//     }
  // }


  
  // $(() => {
  //   $(window).load(() => {
  //     App.load()
  //   })
  // })