<script lang="ts">
    import { onMount } from 'svelte';
       
    let colorStyles = [
        { name: 'Blue', value: '#0000FF'},
        { name: 'Orange', value: '#FF7F00' },
        { name: 'Yellow', value: '#FFFF00' },
        { name: 'Green', value: '#00FF00' },
        { name: 'Red', value: '#FF0000' },
        { name: 'True Colour', value: 'https://www.youtube.com/watch?v=ZzUsKizhb8o&list=PL_vkVwrwck3NJ9ajMQv7Y-DfX9gVAk5in&index=2' },
        { name: 'Indigo', value: '#4B0082' },
        { name: 'Purple', value: '#9400D3' },
        { name: 'Pink', value: '#FF1493' },
        { name: 'Cyan', value: '#00FFFF' },
        { name: 'Magenta', value: '#FF00FF' },
        { name: 'Teal', value: '#008080' },
        { name: 'Silver', value: '#C0C0C0' },
        { name: 'Gray', value: '#808080' },
        { name: 'Maroon', value: '#800000' },
        { name: 'Olive', value: '#808000' },
        { name: 'Navy', value: '#000080' },
        { name: 'Black', value: '#000000' },
        { name: 'White', value: '#FFFFFF' }

    ];

    let selectedStyle = colorStyles[0].value; // Default style
    let showVideo = false;

    onMount(() => {
        document.body.style.backgroundColor = selectedStyle;
    });

    function handleChange(event: Event) {
        selectedStyle = (event.target as HTMLSelectElement)?.value || '';
        showVideo = selectedStyle === 'https://www.youtube.com/watch?v=ZzUsKizhb8o&list=PL_vkVwrwck3NJ9ajMQv7Y-DfX9gVAk5in&index=2';
        if (!showVideo) {
            document.body.style.backgroundColor = selectedStyle;
        }
    }
</script>

<div 
    style:background-color={selectedStyle}>
</div>

{#if showVideo}
    <iframe title="Selected Video" style="width: 85vw; height: 85vh;" src="https://www.youtube.com/embed/ZzUsKizhb8o?list=PL_vkVwrwck3NJ9ajMQv7Y-DfX9gVAk5in&index=2&autoplay=1" frameborder="0" allow="autoplay; encrypted-media; fullscreen"></iframe>
{/if}

<label>
    <select bind:value={selectedStyle} on:change={handleChange}>
        {#each colorStyles as style}
            <option value={style.value}>{style.name}</option>
        {/each}
    </select>
    Change Color Layout Style
</label>
