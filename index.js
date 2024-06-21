require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
// const bot = new TelegramBot(process.env.BOT_TOKEN)
const bot = new TelegramBot(process.env.BOT_TOKEN, {polling: true});

const  algorithm={
   bubblesort:`Bubble Sort is a simple comparison-based sorting algorithm.
    Algorithm:
    
    Start at the beginning of the list.
    Compare each pair of adjacent items and swap them if they are in the wrong order.
    Repeat the process for each element in the list.
    The process is repeated until no more swaps are needed.
   
    Pseudocode:
  
    procedure bubbleSort(A: list of sortable items)
        n = length(A)
        repeat
            swapped = false
            for i = 1 to n-1 do
                if A[i-1] > A[i] then
                    swap(A[i-1], A[i])
                    swapped = true
                end if
            end for
        until not swapped
    end procedure`,

    SelectionSort:
        `Selection Sort divides the list into two parts: the sorted part at the beginning and the unsorted part at the end.

Algorithm:

Find the minimum element in the unsorted part of the list.
Swap it with the first unsorted element.
Move the boundary between the sorted and unsorted parts one element to the right.
Repeat until the entire list is sorted.

Pseudocode:

procedure selectionSort(A: list of sortable items)
    n = length(A)
    for i = 0 to n-1 do
        minIndex = i
        for j = i+1 to n-1 do
            if A[j] < A[minIndex] then
                minIndex = j
            end if
        end for
        swap(A[i], A[minIndex])
    end for
end procedure`,
InsertionSort:
    `Insertion Sort builds the sorted list one item at a time.

Algorithm:

Start with the second element, as the first element is trivially sorted.
Compare the current element with the elements in the sorted part of the list.
Shift all larger elements in the sorted part to the right to make room for the current element.
Insert the current element into its correct position.
Repeat for all elements.
 
Pseudocode:

procedure insertionSort(A: list of sortable items)
    n = length(A)
    for i = 1 to n-1 do
        key = A[i]
        j = i - 1
        while j >= 0 and A[j] > key do
            A[j + 1] = A[j]
            j = j - 1
        end while
        A[j + 1] = key
    end for
end procedure`,
MergeSort:
`Merge Sort is a divide-and-conquer algorithm.

Algorithm:

Divide the list into two halves.
Recursively sort each half.
Merge the two sorted halves to produce the sorted list.
 
Pseudocode:

procedure mergeSort(A: list of sortable items)
if length(A) > 1 then
mid = length(A) / 2
leftHalf = A[0:mid]
rightHalf = A[mid:length(A)]

mergeSort(leftHalf)
mergeSort(rightHalf)

i = 0
j = 0
k = 0

while i < length(leftHalf) and j < length(rightHalf) do
    if leftHalf[i] < rightHalf[j] then
        A[k] = leftHalf[i]
        i = i + 1
    else
        A[k] = rightHalf[j]
        j = j + 1
    end if
    k = k + 1
end while

while i < length(leftHalf) do
    A[k] = leftHalf[i]
    i = i + 1
    k = k + 1
end while

while j < length(rightHalf) do
    A[k] = rightHalf[j]
    j = j + 1
    k = k + 1
end while
end if
end procedure`
,
QuickSort:
    `Quick Sort is another divide-and-conquer algorithm.

Algorithm:

Choose a pivot element from the list.
Partition the list into two halves, with elements less than the pivot on the left and elements greater than the pivot on the right.
Recursively sort each half.
Combine the sorted halves.

 Pseudocode:


procedure quickSort(A: list of sortable items, low: int, high: int)
    if low < high then
        pivotIndex = partition(A, low, high)
        quickSort(A, low, pivotIndex - 1)
        quickSort(A, pivotIndex + 1, high)
    end if
end procedure

procedure partition(A: list of sortable items, low: int, high: int) -> int
    pivot = A[high]
    i = low - 1
    for j = low to high - 1 do
        if A[j] < pivot then
            i = i + 1
            swap(A[i], A[j])
        end if
    end for
    swap(A[i + 1], A[high])
    return i + 1
end procedure`
,


HeapSort:
    `Heap Sort involves building a heap from the list and then repeatedly removing the maximum element from the heap to build the sorted list.

Algorithm:

Build a max heap from the list.
Swap the root (maximum value) with the last element of the heap.
Reduce the size of the heap by one and heapify the root.
Repeat until the entire list is sorted.

Pseudocode:

procedure heapSort(A: list of sortable items)
    n = length(A)
    for i = n / 2 - 1 down to 0 do
        heapify(A, n, i)
    end for
    for i = n - 1 down to 1 do
        swap(A[0], A[i])
        heapify(A, i, 0)
    end for
end procedure

procedure heapify(A: list of sortable items, n: int, i: int)
    largest = i
    left = 2 * i + 1
    right = 2 * i + 2
    
    if left < n and A[left] > A[largest] then
        largest = left
    end if
    
    if right < n and A[right] > A[largest] then
        largest = right
    end if
    
    if largest != i then
        swap(A[i], A[largest])
        heapify(A, n, largest)
    end if
end procedure`
,ShellSort:
    `Shell Sort is an optimization of Insertion Sort that allows the exchange of far-apart elements.

Algorithm:

Initialize a gap sequence.
For each gap, perform a gapped insertion sort.
Reduce the gap and repeat until the gap is 1.
 
Pseudocode:


procedure shellSort(A: list of sortable items)
    n = length(A)
    gap = n / 2
    
    while gap > 0 do
        for i = gap to n - 1 do
            temp = A[i]
            j = i
            while j >= gap and A[j - gap] > temp do
                A[j] = A[j - gap]
                j = j - gap
            end while
            A[j] = temp
        end for
        gap = gap / 2
    end while
end procedure`


}


try {
    bot.on('message', (msg) => {
        const chatId = msg.chat.id;
        const text = msg.text.toLowerCase();
        const no = parseInt(text);

        const sortingAlgorithms = [
            'Bubble Sort',
            'Selection Sort',
            'Insertion Sort',
            'Merge Sort',
            'Quick Sort',
            'Heap Sort',
            'Shell Sort'
        ];

        if (text.startsWith('/start') || text.startsWith('start')) {
            bot.sendMessage(chatId, "Hello there.! Just type 'sorting algorithm' for more information.");
        } else if (text.startsWith('sorting algorithm')) {
            let response = "Types of Sorting:\nComparison-based Sorting Algorithms:\n";
            sortingAlgorithms.forEach((algorithm, index) => {
                response += `${index + 1}] ${algorithm}\n`;
            });
            response += "To get the code, just reply with the number of the sorting algorithm.";
            bot.sendMessage(chatId, response);
        } else if (!isNaN(no) && no >= 1 && no <= sortingAlgorithms.length) {
            const algorithmNames = [
                'bubblesort',
                'SelectionSort',
                'InsertionSort',
                'MergeSort',
                'QuickSort',
                'HeapSort',
                'ShellSort'
            ];
            bot.sendMessage(chatId, algorithm[algorithmNames[no - 1]]);
        } else {
            bot.sendMessage(chatId, 'Please enter a valid command or number corresponding to a sorting algorithm.');
        }
    });
} catch (error) {
    console.log("An error occurred: ", error);
}
