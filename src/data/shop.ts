interface Owner {
	firstName: string,
	lastName: string,
	email: string,
	phone: string
}

interface ShopData {
		id: number,
		imageSrc: string,
		description: string;
		title: string,
		openAt: string,
		closeAt: string,
		rating: number,
		total: number,
		filled: number,
		category: string[],
		owner: Owner,
		Address: string
	}

export const shopData: ShopData[] = [
	{
		id: 0,
		imageSrc: "/static/media/Dog.7fd01c32.jpg",
		description: "A pet, or companion animal, is an animal kept primarily for a person's company or entertainment rather than as a working animal, livestock or a laboratory animal. Popular pets are often considered to have attractive appearances, intelligence and relatable personalities, but some pets may be taken in on an altruistic basis (such as a stray animal) and accepted by the owner regardless of these characteristics. Two of the most popular pets are dogs and cats; the technical term for a cat lover is an ailurophile and a dog lover a cynophile. Other animals commonly kept include: rabbits; ferrets; pigs; rodents, such as gerbils, hamsters, chinchillas, rats, mice, and guinea pigs; avian pets, such as parrots, passerines and fowls; reptile pets, such as turtles, alligators, crocodiles, lizards, and snakes; aquatic pets, such as fish, freshwater and saltwater snails, amphibians like frogs and salamanders; and arthropod pets, such as tarantulas and hermit crabs. Small pets may be grouped together as pocket pets, while the equine and bovine group include the largest companion animals. Pets provide their owners (or guardians)[1] both physical and emotional benefits. Walking a dog can provide both the human and the dog with exercise, fresh air and social interaction. Pets can give companionship to people who are living alone or elderly adults who do not have adequate social interaction with other people. There is a medically approved class of therapy animals, mostly dogs or cats, that are brought to visit confined humans, such as children in hospitals or elders in nursing homes. Pet therapy utilizes trained animals and handlers to achieve specific physical, social, cognitive or emotional goals with patients",
		title: "Pet Care",
		openAt: "10:00 AM",
		closeAt: "5:00 PM",
		rating: 3,
		total: 20,
		filled: 10,
		category: [
			"bird",
			"cat",
			"dog"
		],
		owner: {
			firstName: "Test",
			lastName: "Runner",
			email: "test333@gmail.com",
			phone: "0123456789"
		},
		Address: "Pet Care Sanjoli Chowk, Shimla, Himachal Pradesh 171006"
	}
]
