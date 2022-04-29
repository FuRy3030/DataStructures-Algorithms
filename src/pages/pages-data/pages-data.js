const PagesDataStructures = [
    {
        name: 'Array',
        urlPath: 'Array',
        mainImgPath: 'data-structure-array.png',
        timeComplexities: [
            'O(1)',
            'O(n)',
            'O(n)',
            'O(n)',	
            'O(1)',	
            'O(n)',	
            'O(n)',	
            'O(n)'
        ],
        spaceComplexity: 'O(n)',
        descriptionTitle: 'Linear sequence...',
        description: 'Arrays are considered as a simplest data structure. They are represented by the group of values ordered in linear sequence. Those values can be accessed via unique index. Usually arrays have immutable, declared during its creation process, size that cannot be changed afterwards. The only possible solution that allows to set the new size is creating another, bigger array. On top of that aforementioned data structure makes possible generating two dimensional or three demensional arrays. 2D arrays also known as matrix can be visualised as a simple size x size table, which each cell holds the given value. Keep in mind arrays are so vital that they underlie the other, more complex and advanced data structures.',
        prosCons: {
            pros: [
                'The simplest and most user friendly data structure;',
                'Quick element access by index - (O(1));',
                'Possibility of creating a more complex structures - 2D, 3D arrays.'
            ],
            cons: [
                'Static, immutable size that can only be changed by creating a new array;',
                'Time-consuming searching for element by value - (O(n));',
                'Slow deletion and insertion process - (O(n)).',
            ]
        },
        usage: [
            {
                iconClass: 'fa-solid fa-arrow-down-a-z',
                text: 'When data need to be stored in a specific and defined order,'
            },
            {
                iconClass: 'fa-solid fa-list-ol',
                text: 'Data nodes must be accessed via index (not value),'
            },
            {
                iconClass: 'fa-solid fa-box',
                text: 'Size of the array is already given at the beginning,'
            },
            {
                iconClass: 'fa-solid fa-table',
                text: `Data set is so simple that it doesn't require anything more complex.`
            }
        ],
        sectionImg: [
            {
                path: 'array-desc.png',
                description: 'Indexes are like keys that can be used to access desired elements stored at provided postions in an array or assign new values to them'
            },
            {
                path: 'array-desc2.png',
                description: 'Elements of the array reserves specific amount of memory and occupy neighbouring slots of it. Hence, reserving more or less memory slots requires to create a new array'
            }
        ],
        examples: [
            {
                title: 'Sequence of chars from the string',
                description: `Each character will occupy one slot in an array with given size that is equal to word's length in this case.`,
                typeRepresentation: ''
            },
            {
                title: 'List of the days of the week or months',
                description: 'Name of each day or month occupies exactly one slot in an array with specified size. Values can be accessed easily by index and insertion order of them is maintained by array structure.',
                typeRepresentation: ''
            },
            {
                title: `Catalogue of shop's products`,
                description: `Amount of prodcuts offered by e-commerce shop doesn't change too frequently, so size of array can be manually adjusted. Array solution allows to access data immediately that is kept in given order, which perfectly fits list of products.`,
                typeRepresentation: ''
            },
            {
                title: 'Group of user preferences',
                description: 'Number of user preferences that can be adjusted is already given at the start and the most commonly performed operation is assigning values selected by user. In the result array gives best versatility and speed.',
                typeRepresentation: ''
            }
        ],
        methods: {
            title: 'Array Methods (Mostly Javascript)',
            methodsList: [
                {
                    boldPart: 'Array[anyNumber][anyNumber]',
                    rest: 'Creates two dimensional array (works in C, C++, Java...),'
                },
                {
                    boldPart: 'Array.push()',
                    rest: 'Adds element to the end of the array,'
                },
                {
                    boldPart: 'Array.pop()',
                    rest: 'Removes last element from the array,'
                },
                {
                    boldPart: 'Array.filter()',
                    rest: 'Returns new array with all elements that have matched the specified condition,'
                },
                {
                    boldPart: 'Array.find()',
                    rest: 'Returns the first element that matches given condition,'
                },
                {
                    boldPart: 'Array.indexOf()',
                    rest: 'Returns index of the first occurence of given element.'
                }
            ]
        }
    },
    {
        name: 'Stack',
        urlPath: 'Stack',
        mainImgPath: 'data-structure-stack.jpeg',
        timeComplexities: [
            'O(n)',
            'O(n)',
            'O(1)',
            'O(1)',	
            'O(n)',	
            'O(n)',	
            'O(n)',	
            'O(1)'
        ],
        spaceComplexity: 'O(n)',
        descriptionTitle: 'Last in - first out...',
        description: 'Stacks like arrays are linear data structures that are relatively simple and easy to use. They can be visualised as piles containing different things like books, plates etc. In many languages they hold sets of values that follow the principle - Last In First Out (LIFO). It means that the last element added to the stack is the only one that is currently accessible and can be removed thereafter. In the result, in order to reach other values in the aforementioned data structure it is required to get rid of all elements standing above them. Stacks are usually array based storages, so they have an immutable size that cannot be exceeded. In the end adding values beyond their capacity is time-consuming and requires recreating them with appropriate amounts of space.',
        prosCons: {
            pros: [
                'Very quick insertion and deletion - (O(1));',
                'Immediate access to the top of the stack - (O(1));',
                'Possibility of keeping a specific, determined order;',
                'LIFO => Last In - First Out principle;',
                'Relatively simple and easy to use.'
            ],
            cons: [
                'Substantially slower insertion outside of stack range - (O(n));',
                'Significantly time-consuming searching for element by value - (O(n));',
                'Accessing elements in the middle or at the bottom of the stack requires deletion of the elements standing above them.'
            ]
        },
        usage: [
            {
                iconClass: 'fa-solid fa-arrow-down-a-z',
                text: 'When data need to be stored in a specific and defined order,'
            },
            {
                iconClass: 'fa-solid fa-clock-rotate-left',
                text: 'Only recently inserted value needs to be accessed at the time,'
            },
            {
                iconClass: 'fa-brands fa-buffer',
                text: 'Other elements need to be accessed only after removing those standing above them,'
            },
            {
                iconClass: 'fa-solid fa-box',
                text: 'The size of the data set is already given at the start.'
            }
        ],
        sectionImg: [
            {
                path: 'stack-desc.png',
                description: 'Stack functions exactly like a pile of books or folders - returns elements in reversed order during dismantling and keeps most recent element at the top'
            },
            {
                path: 'stack-desc2.png',
                description: 'Similarly to piles containing anything, only peek is accessible in the stack. Pulling middle element from a heap of boxes would cause a destruction of it. The same analogy applies to aforementioned stack'
            }
        ],
        examples: [
            {
                title: 'Reversing a string',
                description: 'String can be split into sequence of chars that can be inserted into a stack. Due to "last in - first out" principle, popping all elements results in getting reversed string after combining all of the characters into one piece.',
                typeRepresentation: 'Stack <char>'
            },
            {
                title: 'List of recent user inputs',
                description: 'Every string input like comment could be added to a stack. When user wants to access his recently published opinions, we can easily obtain his inputs in desired order and display them by popping the stack.',
                typeRepresentation: 'Stack <string>'
            },
            {
                title: `Recently visited URLs (Browser History)`,
                description: `Every time when a new webpage is being loaded, its URL is inserted into the stack consisting of visited websites' adresses. When data is retrieved from the stack and displayed to user, recently opened URLs loads at the top of the list thanks to stack principle.`,
                typeRepresentation: 'Stack <string>'
            },
            {
                title: 'Group of user flashcards',
                description: `Real life flashcards perfectly represents the idea of coding stack consisting of flashcards objects. Every time we use flashcards for learing we access them, starting from the top of the pile, by popping following objects and displaying animations on them in appropriate interface.`,
                typeRepresentation: 'Stack <Flashcard>'
            }
        ],
        methods: {
            title: 'Stack Methods',
            methodsList: [
                {
                    boldPart: 'Stack.Push()',
                    rest: 'Adds element to the top of the stack,'
                },
                {
                    boldPart: 'Stack.Pop()',
                    rest: 'Removes element from the top of the stack,'
                },
                {
                    boldPart: 'Stack.Peek()',
                    rest: 'Gets the element at the top without removing it,'
                },
                {
                    boldPart: 'Stack.IsFull()',
                    rest: 'Checks whether the stack is full and returns boolean,'
                },
                {
                    boldPart: 'Stack.IsEmpty()',
                    rest: 'Checks whether the stack is empty and returns boolean,'
                },
                {
                    boldPart: 'Stack.Contains()',
                    rest: 'Checks if the stack contains specific value and returns boolean,'
                },
                {
                    boldPart: 'Stack.Clear()',
                    rest: 'Removes all elements from the stack.'
                }
            ]
        }
    },
    {
        name: 'Queue',
        urlPath: 'Queue',
        mainImgPath: 'data-structure-queue.gif',
        timeComplexities: [
            'O(n)',
            'O(n)',
            'O(1)',
            'O(1)',	
            'O(n)',	
            'O(n)',	
            'O(n)',	
            'O(1)'
        ],
        spaceComplexity: 'O(n)',
        descriptionTitle: 'First in - first out...',
        description: 'Queues can be called stacks older brothers due to big similarities. The best representation of them in a real world scenario is a simple line full of people, because in most languages they are just lines of values, objects or arrays. The key distinction between stacks and queues is the fact that the latter follow the principle - First In First Out (FIFO). It means that items are being added to the end of it and removed from the front of it - exactly like a line at the supermarket. And as with stack, so as to reach values in the middle of the described data structure, it is obligatory to get rid of all elements standing to the front of the desired element. Queues are usually array based storages, so they have an immutable size that cannot be exceeded. In the end adding values beyond their capacity is time-consuming and requires recreating them with appropriate amounts of space.',
        prosCons: {
            pros: [
                'Very quick insertion and deletion - (O(1));',
                'Immediate access to the front of the queue - (O(1));',
                'Possibility of keeping a specific, determined order;',
                'FIFO => First In - First Out principle;',
                'Relatively simple and easy to use.'
            ],
            cons: [
                'Substantially slower insertion outside of queue range - (O(n));',
                'Significantly time-consuming searching for element by value - (O(n));',
                'Accessing elements in the middle or at the end of the queue requires deletion of all elements standing closer to the front.'
            ]
        },
        usage: [
            {
                iconClass: 'fa-solid fa-arrow-down-a-z',
                text: 'When data need to be stored in a specific and defined order,'
            },
            {
                iconClass: 'fa-solid fa-envelopes-bulk',
                text: 'Only initially inserted value needs to be accessed at the time,'
            },
            {
                iconClass: 'fa-solid fa-trash-arrow-up',
                text: 'Other elements need to be accessed only after removing those standing closer to the front in the queue,'
            },
            {
                iconClass: 'fa-solid fa-box',
                text: 'The size of the data set is already given at the start.'
            }
        ],
        sectionImg: [
            {
                path: 'queue-desc.png',
                description: 'It works exactly like a real queue where people leaves it at the front and joins at the end'
            },
            {
                path: 'queue-desc2.png',
                description: 'Prohibition of adding and removing elements directly from the middle of a queue allows to maintain insertion order'
            }
        ],
        examples: [
            {
                title: 'Event-loop of a web browser',
                description: `Event-loop that, which handles events like clicks, hoovers, etc. uses queue as data structure in order to maintain first in - first out principle. It allows to perform user's tasks in appropriate sequence - exactly as they were done.`,
                typeRepresentation: 'Queue <Event>'
            },
            {
                title: 'List of tasks that have to be done',
                description: 'Different pieces of hardware and software like task manager keep track of given tasks and maintain the propper order of them by using first in - first out queue. Using this data structure ensures that tasks are done exactly in the way, they were ordered.',
                typeRepresentation: 'Queue <Task>'
            },
            {
                title: `Songs in custom queue f.e. on Spotify`,
                description: `Music media players queues follows the same, aforementioned 'first in - first out' principle to maintain user order of songs. In the result they use queues as a data structures to fullfil this goal.`,
                typeRepresentation: 'Queue <Song>'
            },
            {
                title: `Numbers of awaiting calls in Call Center`,
                description: `Call centers keep track of awaiting clients on the phone by anserwing always this group that waits for the longest period of time. They achive this goal by storing the awaiting clients' numbers in a queue, which dequeues the numbers being on the line for the longest duration.`,
                typeRepresentation: 'Queue <string>'
            }
        ],
        methods: {
            title: 'Queue Methods',
            methodsList: [
                {
                    boldPart: 'Queue.Enqueue()',
                    rest: 'Adds element to the tail (end) of the queue,'
                },
                {
                    boldPart: 'Queue.Dequeue()',
                    rest: 'Removes element from the head (front) of the queue,'
                },
                {
                    boldPart: 'Queue.Peek()',
                    rest: 'Gets the element from the head (front) of the queue without removing it,'
                },
                {
                    boldPart: 'Queue.IsFull()',
                    rest: 'Checks whether the queue is full and returns boolean,'
                },
                {
                    boldPart: 'Queue.IsEmpty()',
                    rest: 'Checks whether the queue is empty and returns boolean,'
                },
                {
                    boldPart: 'Queue.Contains()',
                    rest: 'Checks if the queue contains specific value and returns boolean,'
                },
                {
                    boldPart: 'Queue.Clear()',
                    rest: 'Removes all elements from the queue.'
                }
            ]
        }
    },
    {
        name: 'List',
        urlPath: 'List',
        mainImgPath: 'data-structure-list.png',
        timeComplexities: [
            'O(1)',
            'O(n)',
            'O(1)',
            'O(n)',	
            'O(1)',	
            'O(n)',	
            'O(n)',	
            'O(n)'
        ],
        spaceComplexity: 'O(n)',
        descriptionTitle: 'More complex array...',
        description: 'Lists are pretty simple data structures like arrays but only a little bit more advanced. According to definition, they are the collections of items (nodes) ordered in a linear sequence. Usually lists implement different sets of methods - most often containing inserting, deleting or sorting. Key distinction beetween array and basic list is the fact that the latter can extend its maxium capacity. Of course adding element to it beyond its capacity is time consuming comparing to insertion within range but allows to modify this data structure dynamically. In other words lists are dynamically adjusted linear structures that can be modified in desired way. They are already implemented in some languages like C# with aforementioned group of methods.',
        prosCons: {
            pros: [
                'Quick element access by index - (O(1));',
                'Fast insertion within list capacity - (O(1));',
                'Dynamically adjusted size;',
                'Simplicity and ease of use.'
            ],
            cons: [
                'Substantially slower insertion outside of list range - (O(n));',
                'Time-consuming searching for element by value - (O(n));',
                'Slow deletion process - (O(n)).',
            ]
        },
        usage: [
            {
                iconClass: 'fa-solid fa-arrow-down-a-z',
                text: 'When data need to be stored in a specific and defined order,'
            },
            {
                iconClass: 'fa-solid fa-list-ol',
                text: 'Data nodes must be accessed via index (not value),'
            },
            {
                iconClass: 'fa-solid fa-box-open',
                text: 'Number of elements could exceed initial capacity,'
            },
            {
                iconClass: 'fa-solid fa-folder-plus',
                text: `The amount of elements could be predicted at the but some of them will be added, deleted or replaced later.`
            }
        ],
        sectionImg: [
            {
                path: 'list-desc.png',
                description: 'Indexes are like keys that can be used to access desired elements stored at provided postion in a list or assign new values to them'
            },
            {
                path: 'list-desc2.png',
                description: 'Elements like folders or books stand next to each other. Adding and deleting values resemble putting in and taking out folders from the box'
            }
        ],
        examples: [
            {
                title: 'Timetable of any mean of transport',
                description: `Timetable in transport app usually comes with a declared size that doesn't change too often. Most frequently each element of timetable will be modified when delays happen and accessed by user to check desired data, which makes a list the best way to store aforementioned schedule.`,
                typeRepresentation: 'List <TimetableElement>'
            },
            {
                title: 'List of words with a given sequence',
                description: `List is the most efficient solution for storing group of words (for example created by spliting a text on every space), because the amount of them won't increase and the operations that most likely will be performed are adding and accessing specific values.`,
                typeRepresentation: 'List <string>'
            },
            {
                title: 'Set of employee data',
                description: `If each employee has his own id, using list becomes the perfect and most comfortable solution because accessing specific elements by index fits this case insanely well.`,
                typeRepresentation: 'List <EmployeeData>'
            },
            {
                title: 'Dynamically gathered user inputs',
                description: `If elements need to be accessed frequently, opportunity of adjusting list content comes handy when it changes more or less too. Therefore, list could store those inputs in appropriate order.`,
                typeRepresentation: 'List <UserInput>'
            }
        ],
        methods: {
            title: 'List Methods',
            methodsList: [
                {
                    boldPart: 'List.Add()',
                    rest: 'Add element at the end of the list,'
                },
                {
                    boldPart: 'List.Insert()',
                    rest: 'Add element at the end of the list,'
                },
                {
                    boldPart: 'List.Remove()',
                    rest: 'Removes provided item from the list,'
                },
                {
                    boldPart: 'List.RemoveAt()',
                    rest: 'Deletes value stored at the specific index,'
                },
                {
                    boldPart: 'List.Find()',
                    rest: 'Returns the first element from the list that matches provided condition,'
                },
                {
                    boldPart: 'List.FindIndex()',
                    rest: 'Looks for the element that meets given requirements and returns the first occurence of it,'
                },
                {
                    boldPart: 'List.IndexOf()',
                    rest: 'Looks for the specific value in list and returns index of the first occurence,'
                },
                {
                    boldPart: 'List.GetRange()',
                    rest: 'Grabs provided amount of elements from the lists and created a new sublist from them.'
                }
            ]
        }
    },
    {
        name: 'Linked List',
        urlPath: 'LinkedList',
        mainImgPath: 'data-structure-linked-list.png',
        timeComplexities: [
            'O(n)',
            'O(n)',
            'O(1)',
            'O(1)',	
            'O(n)',	
            'O(n)',	
            'O(1)',	
            'O(1)'
        ],
        spaceComplexity: 'O(n)',
        descriptionTitle: 'Fully dynamic list...',
        description: 'Linked lists are simply different implementation of “standard” lists. They are collections of nodes, where each node has a value and a pointer (link) to the next node in the collection. Thanks to this build, insertion and deletion is much faster with linked lists compared to traditional ones. They can still be ordered in a given way, but aforementioned operations don’t require shifting elements inside the list. Also they are differently stored in memory (not linearly), which makes them fully dynamic structures with flexibly adjusted size. These benefits come at the expense of losing very fast, unique index access, so reaching values by their index is no longer possible and acquiring specific elements takes a lot more time in this case.',
        prosCons: {
            pros: [
                'Fast insertion regardless of list size - (O(1));',
                'Quick deletion of any element from the list - (O(1));',
                'Fully dynamically adjusted size without time complexity increase on f.e. insertion;',
                'Order of nodes can be easily maintained and modified.'
            ],
            cons: [
                'Time-consuming searching for element by value - (O(n));',
                'Though complexity is the same, linked list takes more memory than array;',
                `Quick access by index isn't possible;`,
                'Harder to implement and use than basic array.'
            ]
        },
        usage: [
            {
                iconClass: 'fa-solid fa-arrow-down-a-z',
                text: 'When data need to be stored in a specific and defined order,'
            },
            {
                iconClass: 'fa-solid fa-plus-minus',
                text: 'Lots of insertion and deletion actions will be performed,'
            },
            {
                iconClass: 'fa-solid fa-box-open',
                text: 'Number of elements is going to exceed initial capacity,'
            },
            {
                iconClass: 'fa-solid fa-rotate',
                text: 'Order of data nodes is going to change frequently.'
            }
        ],
        sectionImg: [
            {
                path: 'linked-list-desc.png',
                description: 'Data nodes are like chain - each value is linked with the following and previous one'
            },
            {
                path: 'linked-list-desc2.png',
                description: 'Adding another element to the list feels like connecting new linke with already existing chain'
            }
        ],
        examples: [
            {
                title: '"To Do List"',
                description: `To do list is going to be modified very often by user by either adding or removing to do's form the list. Moreover, content is going to be rather displayed than accessed. In the result, storing elements in linked list fits the problem in best possible way.`,
                typeRepresentation: 'LinkedList <ToDos>'
            },
            {
                title: `Previous and next page in web browser`,
                description: `Those two buttons in web browser functions thanks to the linked list containing visited URLs. Its size is constantly changing because new sites are being opened by user. On top of that, browser needs to travel only node by node in URLs list, which makes linked list super effective solution.`,
                typeRepresentation: 'LinkedList <string>'
            },
            {
                title: `Music player with a group of songs`,
                description: `Listening to another song is like adding next element to the list. Therefore, insertion process will be performed very frequently in this case and traversal (back and next buttons) will be done only node by node. All of this makes linked list the best way to store data.`,
                typeRepresentation: 'LinkedList <Song>'
            },
            {
                title: `Mailing list`,
                description: `Since it is difficult to predict the number of addresses that email needs to be sent to, mailing list uses linked list as a data structure due to mutliple insertion operations performed on it.`,
                typeRepresentation: 'LinkedList <string>'
            }
        ],
        methods: {
            title: 'Linked List Methods',
            methodsList: [
                {
                    boldPart: 'List.AddBefore()',
                    rest: 'Adds element before a given node,'
                },
                {
                    boldPart: 'List.AddAfter()',
                    rest: 'Adds element after a given node,'
                },
                {
                    boldPart: 'List.AddFirst()',
                    rest: 'Adds element at the beginning of the list,'
                },
                {
                    boldPart: 'List.AddLast()',
                    rest: 'Adds element at the end of the list,'
                },
                {
                    boldPart: 'List.Remove()',
                    rest: 'Removes provided node from the list,'
                },
                {
                    boldPart: 'List.RemoveFirst()',
                    rest: 'Removes element from the beginning of the list,'
                },
                {
                    boldPart: 'List.RemoveLast()',
                    rest: 'Removes element from the end of the list,'
                },
                {
                    boldPart: 'List.Find()',
                    rest: 'Returns the first element from the list that matches provided condition,'
                },
                {
                    boldPart: 'List.Clear()',
                    rest: 'Removes all elements from the list.'
                }
            ]
        }
    },
    {
        name: 'HashTable (Dictionary)',
        urlPath: 'hashtable',
        mainImgPath: 'data-structure-hashtable.png',
        timeComplexities: [
            'O(1)',
            'O(n)',
            'O(1)',
            'O(1)',	
            'O(1)',	
            'O(n)',	
            'O(n)',	
            'O(1)'
        ],
        spaceComplexity: 'O(n)',
        descriptionTitle: 'Key - value pair...',
        description: 'Hash tables and dictionaries are nearly the same data structures, because they implement exactly the same interface. Both of them follow the principle of storing data in key - value pair system. It means that unique, hashed keys are paired with values in the hash table, hence the latter can be accessed via index, which is the aforementioned key. The benefits of these kinds of data storages are significant, because this system lets you insert, remove and access data immediately. Still, without linked-list chaining, adding elements beyond hash tables’ capacity results in a relatively time-consuming process. On top of that, in this case inserting becomes much slower when collision occurs - a situation when a newly added key already exists in the storage.',
        prosCons: {
            pros: [
                'Convenience of using keys that unlike indexes can be represented by any value;',
                'Fast insertion and access to any value using unique key - (O(1));',
                'Quick deletion of any element from the hash table - (O(1));',
                'The more data need to be stored the more efficient hash table become.'
            ],
            cons: [
                'Time-consuming searching for element by value - (O(n));',
                'Collisions makes some operations like insertion significantly slower - (O(n));',
                `Insertion order of elements isn't prevented - values are stored in random sequence;`,
                `Adding elements beyond hash table's capacity also takes substantially more time - (O(n));`,
                'Relatively hard to implement and use without custom libraries.'
            ]
        },
        usage: [
            {
                iconClass: 'fa-solid fa-key',
                text: 'Values must be stored with specific keys that mark the following values,'
            },
            {
                iconClass: 'fa-solid fa-square-root-variable',
                text: `Keys can be assigned with every variable holding any value,`
            },
            {
                iconClass: 'fa-solid fa-plus-minus',
                text: 'Lots of insertion and deletion actions will be performed,'
            },
            {
                iconClass: 'fa-solid fa-boxes-stacked',
                text: 'Large amount of data need to be managed,'
            },
            {
                iconClass: 'fa-solid fa-dolly',
                text: 'Data will be accessed pretty frequently,'
            },
            {
                iconClass: 'fa-solid fa-shuffle',
                text: `Order of elements doesn't matter; They could be stored in a random way.`
            }
        ],
        sectionImg: [
            {
                path: 'hash-table-desc.png',
                description: 'Every hash table key gives access to only one value just like every tangible key usually opens exactly one lock'
            },
            {
                path: 'hash-table-desc2.png',
                description: 'Hash table can be visualised as a system of school lockers in which every key opens exactly one closet'
            }
        ],
        examples: [
            {
                title: `Programming languages compilers`,
                description: `Compiliers uses hash tables in order to store all keywords of a specific language as keys and match them with defined tasks, so the computer knows what to do when particular coding phrases are used in the program.`,
                typeRepresentation: 'HashTable <string,Task>'
            },
            {
                title: `Complex forms submitted by users`,
                description: `Hash tables allows to store submitted forms as values that correspond with keys filled with users' names or ids. This makes retrieval of data insanely fast, accurate and simple.`,
                typeRepresentation: 'HashTable <string,Form>'
            },
            {
                title: `Music app users' playlists`,
                description: `In this example hash tables makes possible to assign stored playlists to users who created them. Username or user's id is saved as a key that corresponds with a given value represented by a playlist in this case.`,
                typeRepresentation: 'HashTable <string,Playlist>'
            },
            {
                title: `Your PC files`,
                description: `Files are stored by the computer in its memory by matching its name to its path. It means that PC uses hash table in which key stores the file name and value holds path to it.`,
                typeRepresentation: 'HashTable <string,string>'
            }
        ],
        methods: {
            title: 'Hash Table and Dictionary Methods',
            methodsList: [
                {
                    boldPart: 'HashTable.Add()',
                    rest: 'Adds element as a key - value pair node and returns true if the operation was successful or false otherwise,'
                },
                {
                    boldPart: 'HashTable.Remove()',
                    rest: 'Removes provided element from the hash table and returns true if the operation was successful or false otherwise,'
                },
                {
                    boldPart: 'HashTable.ContainsKey()',
                    rest: 'Checks whether given hash table already contains provided key and returns boolean,'
                },
                {
                    boldPart: 'HashTable.ContainsValue()',
                    rest: 'Checks whether given hash table already contains provided value and returns boolean'
                },
                {
                    boldPart: 'HashTable.Clear()',
                    rest: 'Removes all elements from the hash table.'
                }
            ]
        }
    },
    {
        name: 'Hash Set',
        urlPath: 'HashSet',
        mainImgPath: 'data-structure-hash-set.png',
        timeComplexities: [
            'N/A',
            'O(1)',
            'O(1)',
            'O(1)',	
            'N/A',	
            'O(1)',	
            'O(n)',	
            'O(1)'
        ],
        spaceComplexity: 'O(n)',
        descriptionTitle: 'Big containers...',
        description: 'Hash sets also implement hashing algorithm but differ substantially from hash tables. They are unordered collections of elements that contain only unique values - repetitions get removed instantly. In other words, hash sets are big containers that can only hold non-repeated values. In the result, elements cannot be accessed by any index or key and the insertion order of them cannot be maintained. However, hash sets guarantee extremely fast lookup for values by searching for them. In addition, just as hash tables, hash sets also allow to insert and remove data immediately. Moreover, similarly to dictionaries, adding elements beyond their capacity results in a much slower process. On top of that, inserting becomes time-consuming when collision occurs - a situation when a newly added value already exists in the storage.',
        prosCons: {
            pros: [
                'Automatic removal of all duplicates occuring in the data set;',
                'Fast insertion and search for a given value - (O(1));',
                'Quick deletion of any element from the hash set - (O(1));',
                'The more data need to be stored the more efficient hash set become.'
            ],
            cons: [
                'Data nodes cannot be accessed via any index or key;',
                'Collisions makes some operations like insertion significantly slower - (O(n));',
                `Insertion order of elements isn't prevented - values are stored in random sequence;`,
                `Adding elements beyond hash set's capacity also takes substantially more time - (O(n));`,
                'Relatively hard to implement and use without custom libraries.'
            ]
        },
        usage: [
            {
                iconClass: 'fa-regular fa-clone',
                text: 'Data set contains lots of duplicates that must be removed in advance,'
            },
            {
                iconClass: 'fa-solid fa-plus-minus',
                text: 'Lots of insertion and deletion actions will be performed,'
            },
            {
                iconClass: 'fa-solid fa-boxes-stacked',
                text: 'Large amount of data need to be managed,'
            },
            {
                iconClass: 'fa-solid fa-dolly',
                text: 'Data will be looked up pretty frequently,'
            },
            {
                iconClass: 'fa-solid fa-shuffle',
                text: `Order of elements doesn't matter; They could be stored in a random way,`
            },
            {
                iconClass: 'fa-regular fa-eye-slash',
                text: `Values don't need to be accessed using any index or key.`
            }
        ],
        sectionImg: [
            {
                path: 'hash-set-desc2.png',
                description: `Hash set is like a big container that can hold significant amount of elements but isn't able to maintain their order`
            },
            {
                path: 'hash-set-desc.png',
                description: 'Only unique values can be stored in hash set. Any duplicate is being removed instantly from the rest of values'
            }
        ],
        examples: [
            {
                title: 'List of users email addresses',
                description: `List containing users emails can contain only unique values and order of them doesn't matter at all. Moreover, the most frequently completed action will be checking whether element already exists in the set paired with insertion and deletion. Therefore, hash set fits this as a solution perfectly.`,
                typeRepresentation: 'HashSet <string>'
            },
            {
                title: 'List of lottery tickets',
                description: `Every lottery ticket can be only represented by an unique value. Order of them doesn't matter too because they will be accessed by value, which is insanely fast in hash set.`,
                typeRepresentation: 'HashSet <string>'
            },
            {
                title: 'Unique user inputs',
                description: `Hash set can be used as a temporary storage for any group of user inputs that must be unique. The success of insertion of a new element could determine the notification sent to user - whether addition was successful or not.`,
                typeRepresentation: 'HashSet <UserInput>'
            },
            {
                title: 'List of unique words from the text',
                description: `Hash set fits perfectly as a solution in this case. Splitted text into group of words could be put into newly created hash set that deletes duplicates. On top of that, it guarantees super quickly retrieval of specific words from the text if needed.`,
                typeRepresentation: 'HashSet <string>'
            }
        ],
        methods: {
            title: 'Hash Set Methods',
            methodsList: [
                {
                    boldPart: 'HashSet.Add()',
                    rest: 'Adds element to the set and returns true if the operation was successful or false otherwise,'
                },
                {
                    boldPart: 'HashSet.Remove()',
                    rest: 'Removes provided element from the hash table and returns true if the operation was successful or false otherwise,'
                },
                {
                    boldPart: 'HashSet.Contains()',
                    rest: 'Checks whether given hash set already contains provided value and returns boolean,'
                },
                {
                    boldPart: 'HashSet.UnionWith()',
                    rest: 'Merges two sets into one super set that contains unique values from both collections'
                },
                {
                    boldPart: 'HashSet.IntersectWith()',
                    rest: 'Finds common values in a set and other collection and modifies the prior by keeping only mutual elements'
                },
                {
                    boldPart: 'HashSet.IsSubsetOf()',
                    rest: 'Checks whether given hash set is subset of other data set and returns boolean,'
                },
                {
                    boldPart: 'HashSet.IsSupersetOf()',
                    rest: 'Checks whether given hash set is superset of other data set and returns boolean,'
                },
                {
                    boldPart: 'HashSet.Clear()',
                    rest: 'Removes all elements from the hash set.'
                }
            ]
        }
    },
];

const BinarySearchTreeData = {
    name: 'Binary Search Tree',
    urlPath: 'BinarySearchTree',
    mainImgPath: 'data-structure-binary-search-tree.png',
    timeComplexities: [
        'O(log(n))',
        'O(log(n))',
        'O(log(n))',
        'O(log(n))',	
        'O(n)',	
        'O(n)',	
        'O(n)',	
        'O(n)'
    ],
    spaceComplexity: 'O(n)',
    descriptionTitle: 'Fully dynamic tree...',
    description: `Binary search tree is a tree data structure consisting of linked nodes that contain values.  Every one of them can have at most two children called respectively left node and right node. The first one holds a smaller value and the latter contains a bigger one when compared to the parent key. As the result, the binary search tree can store only comparable values like integers, dates, or strings (f.e. comparing them alphabetically). Moreover, it can contain only unique elements in order to maintain its structure, so it gets rid of all duplicates during the insertion. This organisation of data allows binary search tree to find, add and remove given values pretty quickly. It also guarantees that the size of the data set is fully dynamic and be adjusted easily without a performance hit. On top of that, it is perfect for finding the smallest and the biggest values, because it does those things even faster by traversing down the tree by choosing respectively smaller or bigger keys.`,
    actions: [
        {
            img: 'bsearchtree-base.png',
            text: 'Starting binary search tree'
        },
        {
            img: 'bsearchtree-after-adding.png',
            text: '31 has been inserted'
        },
        {
            img: 'bsearchtree-after-deleting.png',
            text: '10 has been removed'
        },
        {
            img: 'bsearchtree-after-deleting2.png',
            text: '18 has been removed'
        }
    ],
    prosCons: {
        pros: [
            'Removal of all duplicates occuring in the data set;',
            'Relatively fast access, insertion and deletion of elements - O(log(n));',
            'Extremely quick in finding the smallest and the biggest value in the data set;',
            'Fully dynamically adjusted size without time complexity increase on f.e. insertion;',
            'Data could be retrieved in various orders in particular in sorted one;',
            'Pretty efficient in storing large amount of data.'
        ],
        cons: [
            'Data nodes cannot be accessed via any index or key;',
            'Accessing the second smallest value, the third biggest one etc. becomes extremely ineffective;',
            `Insertion order of elements isn't prevented - values are stored in specific sequence;`,
            `If tree becomes very unbalanced access, insertion and deletion of elements takes much longer - O(n)`,
            'Relatively hard to implement and use without custom libraries.'
        ]
    },
    usage: [
        {
            iconClass: 'fa-regular fa-clone',
            text: 'Data set contains lots of duplicates that must be removed in advance,'
        },
        {
            iconClass: 'fa-solid fa-box-open',
            text: 'Number of elements is going to exceed initial capacity,'
        },
        {
            iconClass: 'fa-solid fa-boxes-stacked',
            text: 'Large amount of data need to be managed,'
        },
        {
            iconClass: 'fa-solid fa-magnifying-glass',
            text: 'Finding the smallest and the biggest value will be done frequently,'
        },
        {
            iconClass: 'fa-solid fa-shuffle',
            text: `Insertion order of elements doesn't matter; They could be stored in a different way,`
        },
        {
            iconClass: 'fa-regular fa-eye-slash',
            text: `Values don't need to be accessed using any index or key,`
        },
        {
            iconClass: 'fa-solid fa-arrow-down-1-9',
            text: `Values must be always sorted (smallest to largest or largest to smallest),`
        },
        {
            iconClass: 'fa-solid fa-greater-than-equal',
            text: `Values are represented by comparable elements like integers or dates.`
        }
    ],
    sectionImg: [
        {
            path: 'binary-search-tree-desc.png',
            description: `Every tree node that doesn't have left child as well as right child is called a "leaf node", because it ends the binary search tree like leaf ends the branch of a green tree`
        },
        {
            path: 'binary-search-tree-desc2.png',
            description: 'The first node that starts the binary search tree is called a "root node", because it begins the binary search tree like root begins the top of a green tree'
        }
    ],
    examples: [
        {
            title: 'Greater or less than a given number',
            description: `Binary search tree is a perfect solution for finding all elements greater or less than a given value in a data set. It simply requires to traverse to the first node containing key that is greater or less respectively and return the whole subtree.`,
            typeRepresentation: ''
        },
        {
            title: 'Ranking list',
            description: `Binary search tree ensures that users are always sorted according to their points. On top of that it allows to find a user with the biggest and the smallest amount of points very efficiently.`,
            typeRepresentation: ''
        },
        {
            title: 'List of user events',
            description: `Every node in binary search tree can have an object containing a date of an event and other neccessary information concerning it. In this case events are always sorted like those in a calendar and also dynamically adding new ones is also very quick due to no size constraints.`,
            typeRepresentation: ''
        },
        {
            title: 'Live auction market',
            description: `During an auction we need to keep track of the highest price that a buyer is willing to pay. Binary search tree maintains values in sorted order and finds the highest one very quickly. On top of that adding new elements (prices by buyers) isn't a problem.`,
            typeRepresentation: ''
        }
    ],
    methods: {
        title: 'Binary Serach Tree Methods',
        methodsList: [
            {
                boldPart: 'BinarySerachTree.Add()',
                rest: 'Adds a new element as a node to the tree and returns true if it was inserted or false if it already exists,'
            },
            {
                boldPart: 'BinarySerachTree.Remove()',
                rest: 'Removes provided element from the binary search tree and returns true if the operation was successful or false otherwise,'
            },
            {
                boldPart: 'BinarySerachTree.Contains()',
                rest: 'Checks whether given binary search tree already contains provided value and returns boolean (true if contains otherwise false),'
            },
            {
                boldPart: 'BinarySerachTree.FindMaxValue()',
                rest: 'Finds the biggest value in the binary search tree and returns it,'
            },
            {
                boldPart: 'BinarySerachTree.FindMinValue()',
                rest: 'Finds the smallest value in the binary search tree and returns it,'
            },
            {
                boldPart: 'BinarySerachTree.GreaterThan()',
                rest: 'Returns all values from the binary search tree that are bigger than a given one,'
            },
            {
                boldPart: 'BinarySerachTree.LessThan()',
                rest: 'Returns all values from the binary search tree that are smaller than a given one,'
            },
            {
                boldPart: 'BinarySerachTree.Clear()',
                rest: 'Removes all elements from the binary search tree.'
            }
        ]
    },
    code: `    class BinarySearchTree
    {
        public class Node
        {
            public int Value { get; set; }
            public Node? LeftNode { get; set; }
            public Node? RightNode { get; set; }
    
            public Node(int Item)
            {
                Value = Item;
                LeftNode = null;
                RightNode = null;
            }
        }
    
        public Node? Root { get; set; }
    
        public BinarySearchTree()
        {
            Root = null;
        }
    
        public bool Add(int Value)
        { 
            if (this.Root == null)
            {
                this.Root = new Node(Value);
                return true;
            }
    
            return Insert(Value, this.Root);
        }
    
        public void Remove(int Value)
        {
            if (this.Root == null)
            {
                return;
            }
    
            this.Root = Delete(Value, this.Root);
        }
    
        public void DisplayElements()
        {
            Traverse(this.Root);
        }
    
        public int FindMinValue()
        {
            if (this.Root == null)
            {
                return -1;
            }
    
            return MinValue(this.Root);
        }
    
        public int FindMaxValue()
        {
            if (this.Root == null)
            {
                return -1;
            }
    
            return MaxValue(this.Root);
        }
    
        public bool Contains(int Value)
        {
            if (this.Root == null)
            {
                return false;
            }
    
            return ValueExists(Value, this.Root);
        }
    
        private bool Insert(int Item, Node CurrentRoot)
        {
            // If value already exists don't insert and return false
            if (CurrentRoot.Value == Item)
            {
                return false;
            }
    
            // If new values is smaller than the one of current node:
            // a. Create a new node with the new key when left node pointer is NULL
            // b. Otherwise keep browsing left sub tree
            else if (CurrentRoot.Value > Item)
            {
                if (CurrentRoot.LeftNode == null)
                {
                    CurrentRoot.LeftNode = new Node(Item);
                    return true;
                }
                else
                {
                    return Insert(Item, CurrentRoot.LeftNode);
                }
            }
    
            // If new values is greater than the one of current node:
            // a. Create a new node with the new key when right node pointer is NULL
            // b. Otherwise keep browsing right sub tree
            else if (CurrentRoot.Value < Item)
            {
                if (CurrentRoot.RightNode == null)
                {
                    CurrentRoot.RightNode = new Node(Item);
                    return true;
                }
                else
                {
                    return Insert(Item, CurrentRoot.RightNode);
                }
            }
    
            return false;
        }
    
        private Node Delete(int Item, Node? CurrentRoot)
        {
            if (CurrentRoot.Value == Item)
            {
                // If node to be deleted has one or zero children replace it with left / right node
                if (CurrentRoot.RightNode == null)
                {
                    CurrentRoot = CurrentRoot.LeftNode;
                }
                else if (CurrentRoot.LeftNode == null)
                {
                    CurrentRoot = CurrentRoot.RightNode;
                }
    
                // Otherwise find the smallest value in the right sub tree
                // Copy it to the element that has to be deleted
                // Remove the smallest element in the right sub tree
                else
                {
                    CurrentRoot.Value = ReplaceValue(CurrentRoot.RightNode);
                    CurrentRoot.RightNode = Delete(CurrentRoot.Value, CurrentRoot.RightNode);
                }
            }
    
            // If the value that must be deleted is smaller than the current one
            // a. Stop removal process when NULL node is found
            // b. Otherwise keep browsing left sub tree
            else if (CurrentRoot.Value > Item)
            {
                if (CurrentRoot.LeftNode == null)
                {
                    return CurrentRoot;
                }
                else
                {
                    CurrentRoot.LeftNode = Delete(Item, CurrentRoot.LeftNode);
                }
            }
    
            // If the value that must be deleted is greater than the current one
            // a. Stop removal process when NULL node is found
            // b. Otherwise keep browsing right sub tree
            else if (CurrentRoot.Value < Item)
            {
                if (CurrentRoot.RightNode == null)
                {
                    return CurrentRoot;
                }
                else
                {
                    CurrentRoot.RightNode = Delete(Item, CurrentRoot.RightNode);
                }          
            }
    
            return CurrentRoot;
        }
    
        private void Traverse(Node CurrentRoot)
        {
            if (CurrentRoot != null)
            {
                Traverse(CurrentRoot.LeftNode);
                Console.Write(CurrentRoot.Value.ToString() + " ");
                Traverse(CurrentRoot.RightNode);
            }
        }
    
        private int ReplaceValue(Node CurrentRoot)
        {
            // Look for the minimum value by browsing only left nodes
            int MinValue = CurrentRoot.Value;
            while (CurrentRoot.LeftNode != null)
            {
                MinValue = CurrentRoot.LeftNode.Value;
                CurrentRoot = CurrentRoot.LeftNode;
            }
            return MinValue;
        }
    
        private int MinValue(Node CurrentRoot)
        {
            // Look for the minimum value by browsing only left nodes
            int MinValue = CurrentRoot.Value;
            while (CurrentRoot.LeftNode != null)
            {
                MinValue = CurrentRoot.LeftNode.Value;
                CurrentRoot = CurrentRoot.LeftNode;
            }
            return MinValue;
        }
    
        private int MaxValue(Node CurrentRoot)
        {
            // Look for the maximum value by browsing only right nodes
            int MaxValue = CurrentRoot.Value;
            while (CurrentRoot.RightNode != null)
            {
                MaxValue = CurrentRoot.RightNode.Value;
                CurrentRoot = CurrentRoot.RightNode;
            }
            return MaxValue;
        }
    
        private bool ValueExists(int TargetValue, Node CurrentRoot)
        {
            // If value doesn't exist return false
            if (CurrentRoot == null)
            {
                return false;
            }
    
            // Otherwise return true
            if (CurrentRoot.Value == TargetValue)
            {
                return true;
            }
    
            // Traversing the tree downwards
            else if (CurrentRoot.Value < TargetValue)
            {
                return ValueExists(TargetValue, CurrentRoot.RightNode);
            }
            else if (CurrentRoot.Value > TargetValue)
            {
                return ValueExists(TargetValue, CurrentRoot.LeftNode);
            }
    
            return false;
        }
    }
    
    class Program
    {
        static public void Main(String[] args)
        {
            BinarySearchTree MyBinarySearchTree = new BinarySearchTree();
            Console.WriteLine(MyBinarySearchTree.Add(4));
            MyBinarySearchTree.Add(2);
            MyBinarySearchTree.Add(10);
            MyBinarySearchTree.Add(12);
            MyBinarySearchTree.Add(8);
            MyBinarySearchTree.Add(1);
            MyBinarySearchTree.Add(6);
            Console.WriteLine(MyBinarySearchTree.Add(7));
            MyBinarySearchTree.DisplayElements();
            MyBinarySearchTree.Remove(4);
            MyBinarySearchTree.Remove(7);
            MyBinarySearchTree.DisplayElements();
            Console.WriteLine(MyBinarySearchTree.Contains(1));
            Console.WriteLine(MyBinarySearchTree.FindMinValue());
            Console.WriteLine(MyBinarySearchTree.FindMaxValue());
        }
    }`
}

const AVLTreeData = {
    name: 'AVL Tree',
    urlPath: 'AVLTree',
    mainImgPath: 'data-structure-avl-tree.png',
    timeComplexities: [
        'O(log(n))',
        'O(log(n))',
        'O(log(n))',
        'O(log(n))',	
        'O(log(n))',	
        'O(log(n))',	
        'O(log(n))',	
        'O(log(n))'
    ],
    spaceComplexity: 'O(n)',
    descriptionTitle: 'Self balancing tree...',
    description: `AVL Tree follows exactly the same principles as binary search tree (check it if you haven’t used it before) - it is organised as a tree that contains nodes, which can have at most two children (one to the left, one to the right). This data structure can hold only comparable, unique values like integers, dates, or strings (f.e. comparing them alphabetically), because the left node contains a smaller key than its parent while the right one contains a bigger key. Similarly to the binary search tree, its size can also be adjusted according to needs. AVL Tree has one advantage over binary search tree - it is a self-balancing tree, which means that it is able to maintain the smallest possible height. This substantially speeds up operations like searching, inserting, or removing in some cases. Balancing is achieved by rotating specific parts of the tree following given rules during insertion and deletion. Those conditions are determined by the values and balance factors of nodes. `,
    actions: [
        {
            img: 'avl-tree-adding-64.png',
            text: `64 was inserted, but the tree isn't balanced yet`
        },
        {
            img: 'avl-tree-adding-64-balanced.png',
            text: `The tree is already balanced (balance factors consists of -1, 0, 1)`
        },
        {
            img: 'avl-tree-deleting-30.png',
            text: `30 was removed, but the tree isn't balanced yet`
        },
        {
            img: 'avl-tree-deleting-30-balanced.png',
            text: `The tree is already balanced (balance factors consists of -1, 0, 1)`
        }
    ],
    prosCons: {
        pros: [
            'Removal of all duplicates occuring in the data set;',
            'Relatively fast access, insertion and deletion of elements in every possible case - O(log(n));',
            'Extremely quick in finding the smallest and the biggest value in the data set;',
            'Fully dynamically adjusted size without time complexity increase on f.e. insertion;',
            'Data could be retrieved in various orders in particular in sorted one;',
            'Pretty efficient in storing large amount of data.'
        ],
        cons: [
            'Data nodes cannot be accessed via any index or key;',
            'Accessing the second smallest value, the third biggest one etc. becomes extremely ineffective;',
            `Insertion order of elements isn't prevented - values are stored in specific sequence;`,
            'Rotation of nodes during insertion and deletion could take some time;',
            'Relatively hard to implement and use without custom libraries.'
        ]
    },
    usage: [
        {
            iconClass: 'fa-regular fa-clone',
            text: 'Data set contains lots of duplicates that must be removed in advance,'
        },
        {
            iconClass: 'fa-solid fa-box-open',
            text: 'Number of elements is going to exceed initial capacity,'
        },
        {
            iconClass: 'fa-solid fa-boxes-stacked',
            text: 'Large amount of data need to be managed,'
        },
        {
            iconClass: 'fa-solid fa-magnifying-glass',
            text: 'Finding the smallest and the biggest value will be done frequently,'
        },
        {
            iconClass: 'fa-solid fa-shuffle',
            text: `Insertion order of elements doesn't matter; They could be stored in a different way,`
        },
        {
            iconClass: 'fa-regular fa-eye-slash',
            text: `Values don't need to be accessed using any index or key,`
        },
        {
            iconClass: 'fa-solid fa-arrow-down-1-9',
            text: `Values must be always sorted (smallest to largest or largest to smallest),`
        },
        {
            iconClass: 'fa-solid fa-greater-than-equal',
            text: `Values are represented by comparable elements like integers or dates.`
        }
    ],
    sectionImg: [
        {
            path: 'avl-tree-desc.png',
            description: `AVL Tree performs right, left, right-left and left-right rotations of its nodes most of the times when tree content changes (insertion and removal of elements)`
        },
        {
            path: 'avl-tree-desc2.png',
            description: 'Balance factor (difference between left and right subtrees heights) is calculated for every node, hence AVL Tree stays balanced and maintains the smallest possible height'
        }
    ],
    examples: [
        {
            title: 'Databases',
            description: `AVL Trees are used a lot in databases that require very frequent data lookups but don't need to be updated (insertion and deletion respectively) that often. It comes with the fact that adding and removing elements sometimes involves several rotations while searching for value is always very quick.`,
            typeRepresentation: ''
        },
        {
            title: 'List of usernames / logins',
            description: `Usernames and logins are often represented by unique values (strings). In case of dynamically adding new users and requirement to display all of their usernames / logins in sorted order (f.e. friends list, clan list, server list), AVL Tree could be the perfect fit.`,
            typeRepresentation: ''
        },
        {
            title: 'Task schedule in management app',
            description: `Every task usually comes with a date (when it was added or a deadline simply). In most management apps ordering them according to its date is a key feature. Moreover, tasks are added dynamically and usually functions like displaying task that has the least time before its deadline (finding element with the smallest date) comes in handy. AVL Tree satisfies all of this requirements.`,
            typeRepresentation: ''
        },
        {
            title: 'Greater or less than a given number',
            description: `AVL Tree is also a perfect solution for finding all elements greater or less than a given value in a data set. It simply requires to traverse to the first node containing key that is greater or less respectively and return the whole subtree.`,
            typeRepresentation: ''
        }
    ],
    methods: {
        title: 'AVL Tree Methods',
        methodsList: [
            {
                boldPart: 'AVLTree.Add()',
                rest: 'Adds a new element as a node to the tree and returns true if it was inserted or false if it already exists,'
            },
            {
                boldPart: 'AVLTree.Remove()',
                rest: 'Removes provided element from the tree and returns true if the operation was successful or false otherwise,'
            },
            {
                boldPart: 'AVLTree.Contains()',
                rest: 'Checks whether given AVL Tree already contains provided value and returns boolean (true if contains otherwise false),'
            },
            {
                boldPart: 'AVLTree.FindMaxValue()',
                rest: 'Finds the biggest value in the AVL Tree and returns it,'
            },
            {
                boldPart: 'AVLTree.FindMinValue()',
                rest: 'Finds the smallest value in the AVL Tree and returns it,'
            },
            {
                boldPart: 'AVLTree.GreaterThan()',
                rest: 'Returns all values from the AVL Tree that are bigger than a given one,'
            },
            {
                boldPart: 'AVLTree.LessThan()',
                rest: 'Returns all values from the AVL Tree that are smaller than a given one,'
            },
            {
                boldPart: 'AVLTree.Clear()',
                rest: 'Removes all elements from the AVL Tree.'
            }
        ]
    },
    code: `    class AVLTree
    {
        public class Node
        {
            public int Value { get; set; }
            public int Height { get; set; }
            public Node? Left { get; set; }
            public Node? Right { get; set; }

            public Node(int Key)
            {
                Value = Key;
                Height = 0;
                Left = null;
                Right = null;
            }
        }

        public Node Root;

        private int Max(int a, int b)
        {
            return (a > b) ? a : b;
        }

        private int GetHeight(Node? Node)
        {
            if (Node == null)
            {
                return 0;
            }
            else
            {
                return Node.Height;
            }
        }

        // Balance factor as a difference between children heights
        private int GetBalanceFactor(Node? Node)
        {
            if (Node == null)
            {
                return 0;
            }
            else
            {
                return GetHeight(Node.Left) - GetHeight(Node.Right);
            }
        }

        private Node RightRotate(Node FirstNode)
        {
            // Rotation
            Node SecondNode = FirstNode.Left;
            Node SubNode = SecondNode.Right;
            FirstNode.Left = SubNode;
            SecondNode.Right = FirstNode;

            // Update nodes heights
            FirstNode.Height = Max(GetHeight(FirstNode.Left), GetHeight(FirstNode.Right)) + 1;
            SecondNode.Height = Max(GetHeight(SecondNode.Left), GetHeight(SecondNode.Right)) + 1;
            return SecondNode;
        }

        private Node LeftRotate(Node FirstNode)
        {
            // Rotation
            Node SecondNode = FirstNode.Right;
            Node SubNode = SecondNode.Left;
            SecondNode.Left = FirstNode;
            FirstNode.Right = SubNode;

            // Update nodes heights
            FirstNode.Height = Max(GetHeight(FirstNode.Left), GetHeight(FirstNode.Right)) + 1;
            SecondNode.Height = Max(GetHeight(SecondNode.Left), GetHeight(SecondNode.Right)) + 1;
            return SecondNode;
        }

        private Node BalanceTheTreeAfterInsertion(Node CurrentNode, int Value)
        {
            // Update node height after insertion and then update balance factor
            CurrentNode.Height = Max(GetHeight(CurrentNode.Left), GetHeight(CurrentNode.Right)) + 1;
            int BalanceFactor = GetBalanceFactor(CurrentNode);

            // If balance factor is greater than 1 perform:
            // a. Right rotation when new value is less than left child of balanced node
            // b. Otherwise left rotation of left child of balanced node and then
            // b. right rotation of the current one
            if (BalanceFactor > 1)
            {
                if (Value < CurrentNode.Left.Value)
                {
                    return RightRotate(CurrentNode);
                }
                else
                {
                    CurrentNode.Left = LeftRotate(CurrentNode.Left);
                    return RightRotate(CurrentNode);
                }
            }

            // If balance factor is less than -1 perform:
            // a. Left rotation when new value is greater than the right child of balanced node
            // b. Otherwise right rotation of the right child of balanced node and then
            // b. left rotation of the current one
            if (BalanceFactor < -1)
            {
                if (Value > CurrentNode.Right.Value)
                {
                    return LeftRotate(CurrentNode);
                }
                else
                {
                    CurrentNode.Right = RightRotate(CurrentNode.Right);
                    return LeftRotate(CurrentNode);
                }
            }

            return CurrentNode;
        }

        private Node BalanceTheTreeAfterDeletion(Node CurrentNode, int Value)
        {
            // Update node height after insertion and then update balance factor
            CurrentNode.Height = Max(GetHeight(CurrentNode.Left), GetHeight(CurrentNode.Right)) + 1;
            int BalanceFactor = GetBalanceFactor(CurrentNode);

            // If balance factor is greater than 1 perform:
            // a. Right rotation when the balance factor of a left child is greater or equal to 0
            // b. Otherwise left rotation of left child of balanced node and then
            // b. right rotation of the current one
            if (BalanceFactor > 1)
            {
                if (GetBalanceFactor(CurrentNode.Left) >= 0)
                {
                    return RightRotate(CurrentNode);
                }
                else
                {
                    CurrentNode.Left = LeftRotate(CurrentNode.Left);
                    return RightRotate(CurrentNode);
                }
            }

            // If balance factor is less than -1 perform:
            // a. Left rotation when the balance factor of a right child is less or equal to 0
            // b. Otherwise right rotation of the right child of balanced node and then
            // b. left rotation of the current one
            if (BalanceFactor < -1)
            {
                if (GetBalanceFactor(CurrentNode.Right) <= 0)
                {
                    return LeftRotate(CurrentNode);
                }
                else
                {
                    CurrentNode.Right = RightRotate(CurrentNode.Right);
                    return LeftRotate(CurrentNode);
                }
            }

            return CurrentNode;
        }

        private int ReplaceValue(Node CurrentNode)
        {
            // Traverse to the left till minimum value is found
            int MinValue = CurrentNode.Value;
            while (CurrentNode.Left != null)
            {
                MinValue = CurrentNode.Left.Value;
                CurrentNode = CurrentNode.Left;
            }
            return MinValue;
        }

        public void Add(int Key)
        {
            this.Root = Insert(this.Root, Key);
        }

        private Node Insert(Node CurrentNode, int Value)
        {
            if (CurrentNode == null)
            {
                return new Node(Value);
            }

            // Traverse the tree so as to find the place to insert
            else if (Value < CurrentNode.Value)
            {
                CurrentNode.Left = Insert(CurrentNode.Left, Value);
            }
            else if (Value > CurrentNode.Value)
            {
                CurrentNode.Right = Insert(CurrentNode.Right, Value);
            }  
            else
            {
                return CurrentNode;
            }

            // Balance nodes after insertion
            return BalanceTheTreeAfterInsertion(CurrentNode, Value);
        }

        public void Remove(int Key)
        {
            Delete(this.Root, Key);
        }

        private Node Delete(Node CurrentNode, int Value)
        {
            if (CurrentNode.Value == Value)
            {
                // If at least one child is empty replace given node with its child
                if (CurrentNode.Right == null)
                {
                    CurrentNode = CurrentNode.Left;
                }
                else if (CurrentNode.Left == null)
                {
                    CurrentNode = CurrentNode.Right;
                }

                // Otherwise copy minimum value from right subtree to the current node
                // and delete the leaf node
                else
                {
                    CurrentNode.Value = ReplaceValue(CurrentNode.Right);
                    CurrentNode.Right = Delete(CurrentNode.Right, CurrentNode.Value);
                }
            }

            // Traverse tree for a value to be removed
            else if (CurrentNode.Value > Value)
            {
                if (CurrentNode.Left == null)
                {
                    return CurrentNode;
                }
                else
                {
                    CurrentNode.Left = Delete(CurrentNode.Left, Value);
                }
            }
            else if (CurrentNode.Value < Value)
            {
                if (CurrentNode.Right == null)
                {
                    return CurrentNode;
                }
                else
                {
                    CurrentNode.Right = Delete(CurrentNode.Right, Value);
                }
            }

            // Balance nodes after deletion
            if (CurrentNode != null)
            {
                return BalanceTheTreeAfterDeletion(CurrentNode, Value);
            }
            return CurrentNode;
        }

        public void Print()
        {
            Traverse(this.Root);
        }

        private void Traverse(Node CurrentNode)
        {
            // Traverse the whole tree
            if (CurrentNode != null)
            {
                Traverse(CurrentNode.Left);
                Console.Write(CurrentNode.Value.ToString() + " ");
                Traverse(CurrentNode.Right);
            }
        }

        public int FindMinValue()
        {
            return MinValue(this.Root);
        }

        private int MinValue(Node CurrentNode)
        {
            // Traverse maximally to the left in order to find the smallest value
            int MinValue = CurrentNode.Value;
            while (CurrentNode.Left != null)
            {
                MinValue = CurrentNode.Left.Value;
                CurrentNode = CurrentNode.Left;
            }
            return MinValue;
        }

        public int FindMaxValue()
        {
            return MaxValue(this.Root);
        }

        private int MaxValue(Node CurrentNode)
        {
            // Traverse maximally to the right in order to find the greatest value
            int MaxValue = CurrentNode.Value;
            while (CurrentNode.Right != null)
            {
                MaxValue = CurrentNode.Right.Value;
                CurrentNode = CurrentNode.Right;
            }
            return MaxValue;
        }

        public bool Contain(int Key)
        {
            return ValueExists(this.Root, Key);
        }

        private bool ValueExists(Node CurrentNode, int TargetValue)
        {
            if (CurrentNode == null)
            {
                return false;
            }

            // Traverse the tree by checking whether the given value
            // is greater or less than current node's value
            if (CurrentNode.Value == TargetValue)
            {
                return true;
            }
            else if (CurrentNode.Value < TargetValue)
            {
                return ValueExists(CurrentNode.Right, TargetValue);
            }
            else if (CurrentNode.Value > TargetValue)
            {
                return ValueExists(CurrentNode.Left, TargetValue);
            }

            return false;
        }
    }

    class Program
    {
        static public void Main(String[] args)
        {
            AVLTree MyTree = new AVLTree();
            MyTree.Add(1);
            MyTree.Add(2);
            MyTree.Add(3);
            MyTree.Add(10);
            MyTree.Add(11);
            MyTree.Add(15);
            MyTree.Add(16);
            MyTree.Add(17);
            MyTree.Add(18);
            MyTree.Add(6);
            MyTree.Add(8);
            MyTree.Print();
            MyTree.Remove(10);
            MyTree.Remove(2);
            MyTree.Remove(15);
            MyTree.Remove(11);
            MyTree.Remove(8);
            MyTree.Print();
            Console.WriteLine(MyTree.FindMinValue());
            Console.WriteLine(MyTree.FindMaxValue());
            Console.WriteLine(MyTree.Contain(16));
            Console.WriteLine(MyTree.Contain(19));
        }
    }`
}

const BTreeData = {
    name: 'B-Tree',
    urlPath: 'BTree',
    mainImgPath: 'data-structure-btree.png',
    timeComplexities: [
        'O(log(n))',
        'O(log(n))',
        'O(log(n))',
        'O(log(n))',	
        'O(log(n))',	
        'O(log(n))',	
        'O(log(n))',	
        'O(log(n))'
    ],
    spaceComplexity: 'O(n)',
    descriptionTitle: 'Leaves = Arrays...',
    description: `B-Tree also maintains data in a tree-oriented structure. However, its nodes don't hold single values (keys). Instead, they contain arrays that consist of elements ordered in a rising sequence. On top of that, they also carry a boolean indicating if the current node is a leaf and a list of pointers to their children respectively. Each node can hold at most "n-1" keys, "n" pointers. Also, remember that the number of children of a node cannot be smaller than n/2 and usually it is greater by one than the respective amount of keys. The biggest advantage of B-Tree is its decreased height in comparison to other tree-oriented structures. Storing a large number of keys causes a fast increase in height that affects the access time negatively. By holding multiple values in each node we can reduce this surge in complexity. Moreover, B-Trees are dynamic, self-balancing data structures that contain only unique values and guarantee lots of flexibility when being used.`,
    actions: [
        {
            img: 'b-tree-after-adding.png',
            text: `47 was inserted, but the tree isn't reorganised yet`
        },
        {
            img: 'b-tree-after-adding-balanced.png',
            text: `The tree is already reorganised (after splitting of some nodes)`
        },
        {
            img: 'b-tree-after-deleting.png',
            text: `5 was removed, but the tree isn't reorganised yet`
        },
        {
            img: 'b-tree-after-deleting-balanced.png',
            text: `The tree is already reorganised (after borrowing some keys)`
        }
    ],
    prosCons: {
        pros: [
            'Relatively fast access, insertion and deletion of elements in every possible case - O(log(n));',
            'Extremely quick in finding the smallest and the biggest value in the data set;',
            'Fully dynamically adjusted size without time complexity increase on f.e. insertion;',
            'Data could be retrieved in various orders in particular in sorted one;',
            'Extremely efficient in storing large amount of data due to reduced height.'
        ],
        cons: [
            'Data nodes cannot be accessed via any index or key;',
            'Accessing the second smallest value, the third biggest one etc. becomes extremely ineffective;',
            `Insertion order of elements isn't prevented - values are stored in specific sequence;`,
            'Reorganisation of the tree during insertion and deletion could take some time;',
            'B-Tree cannot contain duplicates so it must also include some duplicate-preventing mechanism that sadly slows insertion process;',
            'Very hard to implement and use without custom libraries.'
        ]
    },
    usage: [
        {
            iconClass: 'fa-solid fa-fingerprint',
            text: 'We can ensure that data set contains only unique values,'
        },
        {
            iconClass: 'fa-solid fa-box-open',
            text: 'Number of elements is going to exceed initial capacity,'
        },
        {
            iconClass: 'fa-solid fa-boxes-stacked',
            text: 'Very large amount of data need to be managed,'
        },
        {
            iconClass: 'fa-solid fa-magnifying-glass',
            text: 'Finding the smallest and the biggest value will be done frequently,'
        },
        {
            iconClass: 'fa-solid fa-shuffle',
            text: `Insertion order of elements doesn't matter; They could be stored in a different way,`
        },
        {
            iconClass: 'fa-regular fa-eye-slash',
            text: `Values don't need to be accessed using any index or key,`
        },
        {
            iconClass: 'fa-solid fa-arrow-down-1-9',
            text: `Values must be always sorted (smallest to largest or largest to smallest),`
        },
        {
            iconClass: 'fa-solid fa-greater-than-equal',
            text: `Values are represented by comparable elements like integers or dates.`
        }
    ],
    sectionImg: [
        {
            path: 'btree-desc.png',
            description: `Every B-Tree node contains lots of properties including two different arrays - the first one storing actual keys and the second one pointers to children`
        },
        {
            path: 'btree-desc2.png',
            description: `When any node's array reaches its maximum size and cannot accept another key in the process, this node must be splitted into two separate ones`
        }
    ],
    examples: [
        {
            title: 'Databases',
            description: `In most databases when the amount of data gets insanely big B-Trees are one of the best ways to handle fast access, insertion and deletion of elements. They are also used for various indexing of elements.`,
            typeRepresentation: ''
        },
        {
            title: 'List of users scores',
            description: `When server ranking is updated weekly, monthly etc. and involves many shifts that requires lots of insertions and deletions B-Tree could be one of the best performing solutions. In case when both users achive the same score they must be distinguishable using other criteria so as to avoid duplicates.`,
            typeRepresentation: ''
        },
        {
            title: 'Book order at the stock exchange',
            description: `Stock exchange handles lots of buy / sell orders that changes every minute (new are being added and some are being deleted). Bids must be ordered accordingly to their price. As the result constant sorting, insertion, deletion and dynamic data size makes B-Tree one of the best solutions.`,
            typeRepresentation: ''
        },
        {
            title: 'Filtering user list',
            description: `Suppose you have a long list of usernames and data associated with it. B-Tree allows to filter those users pretty effectively f.e. showing only data of users, whose username starts with 'a' or only of those, whose username first letter stands in the alphabet after 'p'.`,
            typeRepresentation: ''
        }
    ],
    methods: {
        title: 'B-Tree Methods',
        methodsList: [
            {
                boldPart: 'BTree.Add()',
                rest: 'Adds a new element as a node to the tree and returns true if it was inserted or false if it already exists,'
            },
            {
                boldPart: 'BTree.Remove()',
                rest: 'Removes provided element from the tree and returns true if the operation was successful or false otherwise,'
            },
            {
                boldPart: 'BTree.Contains()',
                rest: 'Checks whether given B-Tree already contains provided value and returns boolean (true if contains otherwise false),'
            },
            {
                boldPart: 'BTree.FindMaxValue()',
                rest: 'Finds the biggest value in the B-Tree and returns it,'
            },
            {
                boldPart: 'BTree.FindMinValue()',
                rest: 'Finds the smallest value in the B-Tree and returns it,'
            },
            {
                boldPart: 'BTree.GreaterThan()',
                rest: 'Returns all values from the B-Tree that are bigger than a given one,'
            },
            {
                boldPart: 'BTree.LessThan()',
                rest: 'Returns all values from the B-Tree that are smaller than a given one,'
            },
            {
                boldPart: 'BTree.Clear()',
                rest: 'Removes all elements from the B-Tree.'
            }
        ]
    },
    code: `    class BTree 
    {
        public class Node
        {
            public int CurrentSize { get; set; }
            public int[] Keys { get; set; }
            public Node[] Children { get; set; }
            public bool IsLeaf { get; set; }

            public Node(int BaseSize)
            {
                CurrentSize = 0;
                Keys = new int[2 * BaseSize - 1];
                Children = new Node[2 * BaseSize];
                IsLeaf = true;
            }

            // Look for a value in node's array
            public int Find(int k)
            {
                for (int i = 0; i < this.CurrentSize; i++)
                {
                    if (this.Keys[i] == k)
                    {
                        return i;
                    }
                }
                return -1;
            }
        }

        public int BaseSize { get; set; }
        private Node Root { get; set; }

        public BTree(int Size)
        {
            BaseSize = Size;
            Root = new Node(Size);
        }

        // Split the node into two and make common parent
        private void Split(Node newParent, int Position, Node FirstChild)
        {
            // Create second child and assign starting values
            Node SecondChild = new Node(this.BaseSize);
            SecondChild.IsLeaf = FirstChild.IsLeaf;
            SecondChild.CurrentSize = this.BaseSize - 1;

            // Copy half of the keys from the FirstChild to the second one
            for (int j = 0; j < this.BaseSize - 1; j++)
            {
                SecondChild.Keys[j] = FirstChild.Keys[j + this.BaseSize];
            }

            // If node isn't a leaf also copy half of the children
            if (!FirstChild.IsLeaf)
            {
                for (int j = 0; j < this.BaseSize; j++)
                {
                    SecondChild.Children[j] = FirstChild.Children[j + this.BaseSize];
                }
            }

            // Move children pointers in parent to the right 
            // and assign new child to position + 1 index
            FirstChild.CurrentSize = this.BaseSize - 1;
            for (int j = newParent.CurrentSize; j >= Position + 1; j--)
            {
                newParent.Children[j + 1] = newParent.Children[j];
            }
            newParent.Children[Position + 1] = SecondChild;

            // Assign the remaining middle value key from the first child to a
            // slot dividing pointers to the new and old children
            for (int j = newParent.CurrentSize - 1; j >= Position; j--)
            {
                newParent.Keys[j + 1] = newParent.Keys[j];
            }
            newParent.Keys[Position] = FirstChild.Keys[this.BaseSize - 1];
            newParent.CurrentSize = newParent.CurrentSize + 1;
        }

        public void Add(int Value)
        {
            // If current node is root modify the root or keep browsing down
            Node CurrentRoot = this.Root;
            if (CurrentRoot.CurrentSize == 2 * this.BaseSize - 1)
            {
                Node NewRoot = new Node(this.BaseSize);
                this.Root = NewRoot;
                NewRoot.IsLeaf = false;
                NewRoot.Children[0] = CurrentRoot;
                Split(NewRoot, 0, CurrentRoot);
                Insert(NewRoot, Value);
            }
            else
            {
                Insert(CurrentRoot, Value);
            }
        }

        private void Insert(Node CurrentNode, int Value)
        {
            // If current node is already leaf simply insert a new key
            if (CurrentNode.IsLeaf)
            {
                int i = 0;
                for (i = CurrentNode.CurrentSize - 1; i >= 0 && Value < CurrentNode.Keys[i]; i--)
                {
                    CurrentNode.Keys[i + 1] = CurrentNode.Keys[i];
                }
                CurrentNode.Keys[i + 1] = Value;
                CurrentNode.CurrentSize = CurrentNode.CurrentSize + 1;
            }
            else
            {
                // Find the spot where given value is greater than the previous one
                // and smaller than the following one
                int i = 0;
                for (i = CurrentNode.CurrentSize - 1; i >= 0 && Value < CurrentNode.Keys[i]; i--)
                {
                    
                }
                i++;

                // If the target subnode already has the maximum amount of keys
                // split it to avoid size problems
                Node Temp = CurrentNode.Children[i];
                if (Temp.CurrentSize == 2 * this.BaseSize - 1)
                {
                    Split(CurrentNode, i, Temp);
                    if (Value > CurrentNode.Keys[i])
                    {
                        i++;
                    }
                }
                Insert(CurrentNode.Children[i], Value);
            }
        }

        public void Remove(int Key)
        {
            Delete(this.Root, Key);
        }

        private void Delete(Node CurrentNode, int Value)
        {
            int Position = CurrentNode.Find(Value);

            // If value is found in current node
            if (Position != -1)
            {
                // If current node is a leaf simply delete the value
                if (CurrentNode.IsLeaf)
                {
                    int i = 0;
                    for (i = 0; i < CurrentNode.CurrentSize && CurrentNode.Keys[i] != Value; i++)
                    {
                        // Do nothing
                    }

                    while (i < CurrentNode.CurrentSize)
                    {
                        if (i != 2 * this.BaseSize - 2)
                        {
                            CurrentNode.Keys[i] = CurrentNode.Keys[i + 1];
                        }
                        i++;
                    }
                    CurrentNode.CurrentSize--;
                    return;
                }

                else if (!CurrentNode.IsLeaf) 
                {
                    // Borrow the biggest key from the left subtree 
                    // and assign its value to current position
                    // and then delete its leaf duplicate
                    Node Successor = CurrentNode.Children[Position];
                    int SuccessorKey = 0;
                    if (Successor.CurrentSize >= this.BaseSize)
                    {
                        while (true)
                        {
                            if (Successor.IsLeaf)
                            {
                                SuccessorKey = Successor.Keys[Successor.CurrentSize - 1];
                                break;
                            }
                            else
                            {
                                Successor = Successor.Children[Successor.CurrentSize];
                            }
                        }
                        Delete(Successor, SuccessorKey);
                        CurrentNode.Keys[Position] = SuccessorKey;
                        return;
                    }

                    // Borrow the smallest key from the right subtree and 
                    // assign its value to current position
                    // and then delete its leaf duplicate
                    Node NextNode = CurrentNode.Children[Position + 1];
                    if (NextNode.CurrentSize >= this.BaseSize)
                    {
                        int NextKey = NextNode.Keys[0];
                        if (!NextNode.IsLeaf)
                        {
                            NextNode = NextNode.Children[0];
                            while (true)
                            {
                                if (NextNode.IsLeaf)
                                {
                                    NextKey = NextNode.Keys[NextNode.CurrentSize - 1];
                                    break;
                                }
                                else
                                {
                                    NextNode = NextNode.Children[NextNode.CurrentSize];
                                }
                            }
                        }
                        Delete(NextNode, NextKey);
                        CurrentNode.Keys[Position] = NextKey;
                        return;
                    }

                    // Otherwise merge successor and next node, so CurrentNode.Children[Position]
                    // and CurrentNode.Children[Position + 1] into one node and then 
                    // delete the value from current node
                    else
                    {
                        // Merging nodes
                        int FistChildFreePosition = Successor.CurrentSize + 1;
                        for (int i = 0; i < NextNode.CurrentSize; i++)
                        {
                            Successor.Keys[Successor.CurrentSize] = NextNode.Keys[i];
                            Successor.CurrentSize++;
                        }
                        for (int i = 0; i < NextNode.CurrentSize + 1; i++)
                        {
                            Successor.Children[FistChildFreePosition] = NextNode.Children[i];
                            FistChildFreePosition++;
                        }

                        // Deleting value by moving keys and children
                        for (int i = Position; i < CurrentNode.CurrentSize; i++)
                        {
                            CurrentNode.Keys[i] = CurrentNode.Keys[i + 1];
                        }
                        for (int i = Position + 1; i < CurrentNode.CurrentSize + 1; i++)
                        {
                            CurrentNode.Children[i] = CurrentNode.Children[i + 1];
                        }

                        CurrentNode.CurrentSize--;
                        return;
                    }
                }
            }
            else
            {
                // Look for the next child in traversal
                int ChildPosition = 0;
                while (ChildPosition < CurrentNode.CurrentSize)
                {
                    if (CurrentNode.Keys[ChildPosition] > Value)
                    {
                        break;
                    }
                    ChildPosition++;
                }
                Node Temp = CurrentNode.Children[ChildPosition];

                // If current node child size is at least equal to base size
                // it's safe to keep traversing because this size allows to delete
                // element without any problems
                if (Temp.CurrentSize >= this.BaseSize)
                {
                    Delete(Temp, Value);
                    return;
                }
                else
                {
                    Node nb = null;
                    int devider = -1;

                    // Borrow a first key from the next child and 
                    // replace current node key (CurrentNode.Keys[ChildPosition]) with it;
                    // Then use current node key to increase size of child we want to traverse 
                    // and delete value inside it
                    if (ChildPosition != CurrentNode.CurrentSize && 
                        CurrentNode.Children[ChildPosition + 1].CurrentSize >= this.BaseSize)
                    {
                        devider = CurrentNode.Keys[ChildPosition];
                        nb = CurrentNode.Children[ChildPosition + 1];
                        CurrentNode.Keys[ChildPosition] = nb.Keys[0];
                        Temp.Keys[Temp.CurrentSize++] = devider;
                        Temp.Children[Temp.CurrentSize] = nb.Children[0];
                        for (int i = 1; i < nb.CurrentSize; i++)
                        {
                            nb.Keys[i - 1] = nb.Keys[i];
                        }
                        for (int i = 1; i <= nb.CurrentSize; i++)
                        {
                            nb.Children[i - 1] = nb.Children[i];
                        }
                        nb.CurrentSize--;
                        Delete(Temp, Value);
                        return;
                    }

                    // Analogous to situation above but borrow from key previous child
                    else if (ChildPosition != 0 && 
                        CurrentNode.Children[ChildPosition - 1].CurrentSize >= this.BaseSize)
                    {

                        devider = CurrentNode.Keys[ChildPosition - 1];
                        nb = CurrentNode.Children[ChildPosition - 1];
                        CurrentNode.Keys[ChildPosition - 1] = nb.Keys[nb.CurrentSize - 1];
                        Node child = nb.Children[nb.CurrentSize];
                        nb.CurrentSize--;

                        for (int i = Temp.CurrentSize; i > 0; i--)
                        {
                            Temp.Keys[i] = Temp.Keys[i - 1];
                        }
                        Temp.Keys[0] = devider;
                        for (int i = Temp.CurrentSize + 1; i > 0; i--)
                        {
                            Temp.Children[i] = Temp.Children[i - 1];
                        }
                        Temp.Children[0] = child;
                        Temp.CurrentSize++;

                        Delete(Temp, Value);
                        return;
                    }

                    else
                    {
                        Node Left = null;
                        Node Right = null;
                        bool Last = false;

                        // Get current node key at [ChildPosition] and
                        // surrounding children as left and right respectively
                        if (ChildPosition != CurrentNode.CurrentSize)
                        {
                            devider = CurrentNode.Keys[ChildPosition];
                            Left = CurrentNode.Children[ChildPosition];
                            Right = CurrentNode.Children[ChildPosition + 1];
                        }

                        // Get current node key at [ChildPosition - 1] and
                        // surrounding children as left and right respectively
                        else
                        {
                            devider = CurrentNode.Keys[ChildPosition - 1];
                            Right = CurrentNode.Children[ChildPosition];
                            Left = CurrentNode.Children[ChildPosition - 1];
                            Last = true;
                            ChildPosition--;
                        }

                        // Delete key and right node according to a child position
                        for (int i = ChildPosition; i < CurrentNode.CurrentSize - 1; i++)
                        {
                            CurrentNode.Keys[i] = CurrentNode.Keys[i + 1];
                        }
                        for (int i = ChildPosition + 1; i < CurrentNode.CurrentSize; i++)
                        {
                            CurrentNode.Children[i] = CurrentNode.Children[i + 1];
                        }
                        CurrentNode.CurrentSize--;

                        // Merge left and right node into one with a borrowed key from the parent
                        // (it will be in the middle)
                        Left.Keys[Left.CurrentSize++] = devider;
                        for (int i = 0, j = Left.CurrentSize; i < Right.CurrentSize + 1; i++, j++)
                        {
                            if (i < Right.CurrentSize)
                            {
                                Left.Keys[j] = Right.Keys[i];
                            }
                            Left.Children[j] = Right.Children[i];
                        }
                        Left.CurrentSize += Right.CurrentSize;

                        // If current node was equal to root and is now empty
                        // assign first children as a root
                        if (CurrentNode.CurrentSize == 0)
                        {
                            if (CurrentNode == this.Root)
                            {
                                this.Root = CurrentNode.Children[0];
                            }
                            CurrentNode = CurrentNode.Children[0];
                        }

                        Delete(Left, Value);
                        return;
                    }
                }
            }
        }

        public void Print()
        {
            Display(this.Root);
        }

        // Print all keys with an associated data
        private void Display(Node CurrentNode)
        {
            Console.WriteLine("Size:" + CurrentNode.CurrentSize.ToString());
            Console.WriteLine("IsLeaf:" + CurrentNode.IsLeaf.ToString());
            for (int i = 0; i < CurrentNode.CurrentSize; i++)
            {
                Console.WriteLine(CurrentNode.Keys[i].ToString() + " ");
            }
            if (!CurrentNode.IsLeaf)
            {
                for (int i = 0; i < CurrentNode.CurrentSize + 1; i++)
                {
                    if (CurrentNode.Children[i] != null)
                    {
                        Display(CurrentNode.Children[i]);
                    }
                }
            }
        }

        public int FindMinValue()
        {
            return MinValue(this.Root);
        }

        // Keep browsing child with index [0] and when leaf is found
        // take the key with the smallest index
        private int MinValue(Node CurrentNode)
        {
            if (CurrentNode.IsLeaf)
            {
                return CurrentNode.Keys[0];
            }
            else
            {
                return MinValue(CurrentNode.Children[0]);
            }
        }

        public int FindMaxValue()
        {
            return MaxValue(this.Root);
        }

        // Keep browsing child with index [CurrentSize] and when leaf is found
        // take the key with the biggest index
        private int MaxValue(Node CurrentNode)
        {
            if (CurrentNode.IsLeaf)
            {
                return CurrentNode.Keys[CurrentNode.CurrentSize - 1];
            }
            else
            {
                return MaxValue(CurrentNode.Children[CurrentNode.CurrentSize]);
            }
        }

        public bool Contain(int Key)
        {
            return ValueExists(this.Root, Key);
        }

        // Keep traversing the tree looking for equal value to a given one
        private bool ValueExists(Node CurrentNode, int Value)
        {
            if (CurrentNode.Find(Value) != -1)
            {
                return true;
            }
            else if (!CurrentNode.IsLeaf)
            {
                int ChildPosition = 0;
                while (ChildPosition < CurrentNode.CurrentSize)
                {
                    if (CurrentNode.Keys[ChildPosition] > Value)
                    {
                        break;
                    }
                    ChildPosition++;
                }
                return ValueExists(CurrentNode.Children[ChildPosition], Value);
            }
            else
            {
                return false;
            }
        }
    }

    class Program
    {
        static public void Main(String[] args)
        {
            BTree MyBTree = new BTree(2);
            MyBTree.Add(2);
            MyBTree.Add(10);
            MyBTree.Add(12);
            MyBTree.Add(8);
            MyBTree.Add(1);
            MyBTree.Add(6);
            MyBTree.Add(5);
            MyBTree.Add(4);
            MyBTree.Add(3);
            MyBTree.Add(9);
            Console.WriteLine(MyBTree.FindMaxValue());
            Console.WriteLine(MyBTree.FindMinValue());
            Console.WriteLine(MyBTree.Contain(1));
            Console.WriteLine(MyBTree.Contain(20));
            MyBTree.Remove(12);
            MyBTree.Remove(8);
            MyBTree.Remove(2);
            MyBTree.Remove(6);
            MyBTree.Remove(1);
            MyBTree.Remove(3);
            MyBTree.Remove(9);
            MyBTree.Print();
        }
    }`
}

const EmptyResult = {
    name: '\u2014',
    urlPath: '\u2014',
    mainImgPath: '\u2014',
    timeComplexities: [
        '\u2014',
        '\u2014',
        '\u2014',
        '\u2014',	
        '\u2014',	
        '\u2014',	
        '\u2014',	
        '\u2014'
    ],
    spaceComplexity: '\u2014',
    descriptionTitle: '\u2014',
    description: '\u2014',
    prosCons: {
        pros: [
            '\u2014'
        ],
        cons: [
            '\u2014'
        ]
    },
    usage: [
        {
            iconClass: '\u2014',
            text: '\u2014'
        }
    ],
    sectionImg: [
        {
            path: '\u2014',
            description: '\u2014'
        }
    ],
    examples: [
        {
            title: '\u2014',
            description: `\u2014`,
            typeRepresentation: ''
        },
        {
            title: '\u2014',
            description: '\u2014',
            typeRepresentation: ''
        },
        {
            title: `\u2014`,
            description: `\u2014`,
            typeRepresentation: ''
        },
        {
            title: '\u2014',
            description: '\u2014',
            typeRepresentation: ''
        }
    ],
    methods: {
        title: '\u2014',
        methodsList: [
            {
                boldPart: '\u2014',
                rest: '\u2014'
            }
        ]
    }
}

const AlgorithmsData = [
    {
        name: 'Bubble Sort',
        urlPath: 'bubblesort',
        mainImgPath: 'algo-bubble-sort.jpg',
        timeComplexities: [
            'O(n)',
            'O(n^2)',
            'O(n^2)'
        ],
        spaceComplexity: 'O(1)',
        descriptionTitle: 'Simplest sorting method...',
        description: 'Bubble sort is known as the simplest sorting method available because it depends on iterating through the array and checking whether the current element is equal, greater than, or less than the following one. Different actions are done in relation to desired order of elements (f.e. ascending or descending one). When we want to get the ascending sequence, the algorithm will simply switch the values if the following ones are less than the current ones by iterating multiple times through the array in order to ensure that every element is at its place (inner and outer loops system). Due to its simplicity, bubble sort is one of the slowest methods to have an array sorted but fortunately, its space usage is extremely good. As a result when time complexity really doesn’t matter but the space one does bubble sort could be a good fit.',
        prosCons: {
            pros: [
                'Extremely easy to use;',
                'Performs well when space usage is a crucial factor;',
                'Stable sorting algorithm.'
            ],
            cons: [
                'One of the slowest algorithms - requires a lot of time to sort an array;',
                'Algorithm is very naive, so it often makes unnecessary comparisons that lead to poor optimization.'
            ]
        }
    },
    {
        name: 'Quick Sort',
        urlPath: 'quicksort',
        mainImgPath: 'algo-quick-sort.png',
        timeComplexities: [
            'O(n*log(n))',
            'O(n*log(n))',
            'O(n^2)'
        ],
        spaceComplexity: 'O(log(n))',
        descriptionTitle: 'Dividing algorithm...',
        description: 'Quick sort is considered a very popular method for sorting arrays. It depends on dividing the parent array into two separate ones using a middle point called a pivot. Moreover, splitting happens many times because the algorithm is recursive and relies on further cutting into smaller parts. During each iteration values of each of the two arrays are compared and keys that are greater than the pivot are moved from the left one to the right one. Respectively, elements smaller than the middle point are passed to the left one from the right one. After many divisions and comparisons, the initial array is finally sorted. Quick sort guarantees better time complexity and maintains pretty good space usage at the same time. Therefore, due to its versatility, it is a fairly popular sorting method that can fit many cases.',
        prosCons: {
            pros: [
                'Relatively easy to use;',
                'Performs pertty well when space usage is an important factor;',
                'Better time complexity on average - O(n*log(n)).'
            ],
            cons: [
                'In the worst case time complexity spikes to O(n^2);',
                'Unstable algorithm that is vulnerable to exceptions.'
            ]
        }
    },
    {
        name: 'Merge Sort',
        urlPath: 'mergesort',
        mainImgPath: 'algo-merge-sort.png',
        timeComplexities: [
            'O(n*log(n))',
            'O(n*log(n))',
            'O(n*log(n))'
        ],
        spaceComplexity: 'O(n)',
        descriptionTitle: 'Merging subarrays...',
        description: 'Merge sort is very similar to the quick sort algorithm but involves additional steps. Similarly, it depends on dividing the initial array into two separate ones. Recursion of the algorithm requires splitting up to arrays consisting of only one value. After reaching this moment, merge sort starts to connect single arrangements into bigger chunks, which elements are already sorted accordingly to the given rules. It repeats this process until returning back to the initial array but with a sorted sequence of values. This algorithm focuses on achieving the best time complexities - it is pretty efficient regardless of the encountered case. It comes at the expense of good space usage because merge sort requires creating an additional array for values copying.',
        prosCons: {
            pros: [
                'Relatively easy to use;',
                'Stable and reliable sorting algorithm.;',
                'Sorts array pretty fast regardless of the encountered case - O(n*log(n)).'
            ],
            cons: [
                'Memory-consuming algorithm that takes lots of space - O(n);',
                'During merging involves creating additional array for copied values.'
            ]
        }
    }
];

export const AVLTree = AVLTreeData;
export const BinarySearchTree = BinarySearchTreeData;
export const BTree = BTreeData;
export const EmptyUnit = EmptyResult;
export const Algorithms = AlgorithmsData;

export default PagesDataStructures;