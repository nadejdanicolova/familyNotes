
![Cover photo](../images/all-main.jpg) 

##<a href="../README.md">Project Description</a>  

# TODO edit the models #

##Project models


	event {
		owner : user,
		interested in going: users[],
		sure participating: users[]
	}    
	
 .
	
	comment {
		author: user,
		text: string
	}
	
 .
		
	person {
		firstName: firstName,
		lastName: lastName,
		age: age,
		gender: gender
	}
	
 .
	
	user {
		id: id,	
		userName: userName,
		passHash: passHash,
		avatarPicture: avatarPicture,
		person: person		
	}
	
 .
		

