// Helper function to automatically update order numbers for a specific filter
function updateOrderForFilter(filterName) {
    const filteredImages = images.filter(img => img.tags && img.tags.includes(filterName));
    filteredImages.forEach((img, index) => {
        if (!img.order) img.order = {};
        img.order[filterName] = index + 1;
    });
}

// Helper function to update all order numbers
function updateAllOrders() {
    // Update each filter's order
    const filters = ['all', 'portraits', 'interiors', 'living'];
    filters.forEach(filter => updateOrderForFilter(filter));
}

// Helper function to reorder images in a specific filter
function reorderFilter(filterName, imageSrc, newPosition) {
    const filteredImages = images.filter(img => img.tags && img.tags.includes(filterName));
    const imageIndex = filteredImages.findIndex(img => img.src === imageSrc);
    
    if (imageIndex === -1) return false;
    
    // Remove image from its current position
    const [movedImage] = filteredImages.splice(imageIndex, 1);
    
    // Insert at new position (adjust for 0-based index)
    filteredImages.splice(newPosition - 1, 0, movedImage);
    
    // Update all order numbers for this filter
    updateOrderForFilter(filterName);
    
    return true;
}

const images = [
    { src: "media/250725_110.jpg", tags: ["landing"] },
    { src: "media/220412_UrbanFarmsLA_0245.jpg", tags: ["landing"], active: true },
    { src: "media/250824_Hawaii_252.jpg", tags: ["landing"] },
    { src: "media/250824_Hawaii_296.jpg", tags: ["landing"] },
    { src: "media/R003251.jpg", tags: ["landing"] },
    { src: "media/250520_SungHolly_0358.jpg", tags: ["landing"] },
    { src: "media/250703_051.jpg", tags: ["landing"] },
    { src: "media/221015_KaitCulmo_137_BW.jpeg", tags: ["landing"] },
    { src: "media/250703_088.jpg", tags: ["landing"] },
    { src: "media/220616_UFLA_6059Springvale_162.jpeg", tags: ["landing"] },
    { src: "media/220507_Hawaii_148.jpeg", tags: ["landing"] },
    { src: "media/221219_UFLA_1501HillDr_191.jpeg", tags: ["landing"] },
    { src: "media/240528_TwoBunch_827.jpg", tags: ["landing"] },
    { src: "media/250520_SungHolly_Roll1_022.jpg", tags: ["landing"] },
    { src: "media/250421_UFLA_501NIrving_270.jpg", tags: ["landing"] },
    { src: "media/Trousdale.jpg", tags: ["landing"] },
    { src: "media/240528_TwoBunch_1013.jpg", tags: ["landing"] },
    { src: "media/002.jpg", tags: ["landing"] },
    { src: "media/20230723_GW_Effie_0270.jpg", tags: ["landing"] },
    
    // PORTRAITS SECTION
    { src: "media/250520_SungHolly_0358.jpg", tags: ["portraits"], order: { portraits: 1 } },
    { src: "media/Portraits/20210203_Julie.jpg", tags: ["portraits"], order: { portraits: 2 } },
    { src: "media/Portraits/250520_SungHolly_0089.jpg", tags: ["portraits"], order: { portraits: 3 } },
    { src: "media/Portraits/20160302_Kim.jpg", tags: ["portraits"], order: { portraits: 4 } },
    { src: "media/Portraits/221015_KaitCulmo_137_BW.jpeg", tags: ["portraits"], order: { portraits: 5 } },
    { src: "media/Trousdale.jpg", tags: ["portraits"], order: { portraits: 6 } },
    { src: "media/002.jpg", tags: ["portraits"], order: { portraits: 7 } },
    { src: "media/JulieHanse_238.jpg", tags: ["portraits"], order: { portraits: 8 } },
    { src: "media/Jack_studio.jpg", tags: ["portraits"], order: { portraits: 9 } }, 
    { src: "media/221105_Zora_535.jpeg", tags: ["portraits"], order: { portraits: 10 } }, 
    
    // INTERIORS SECTION
    { src: "media/240528_TwoBunch_827.jpg", tags: ["interiors"], order: { interiors: 1 } },
    { src: "media/Interiors/250910_114.jpg", tags: ["interiors"], order: { interiors: 2 } },
    { src: "media/20230723_GW_Effie_Film_14_edit.jpg", tags: ["interiors"], order: { interiors: 3 } },
    { src: "media/240709_Harcourt_247.jpg", tags: ["interiors"], order: { interiors: 4 } },
    { src: "media/Two Bunch Palms/240528_TwoBunch_549.jpg", tags: ["interiors"], order: { interiors: 5 } },
    { src: "media/250318_5814Eaton_320.jpg", tags: ["interiors"], order: { interiors: 6 } },
    { src: "media/Interiors/250910_092.jpg", tags: ["interiors"], order: { interiors: 7 } },
    { src: "media/Two Bunch Palms/240528_TwoBunch_219.jpg", tags: ["interiors"], order: { interiors: 8 } },
    { src: "media/20230723_GW_Effie_Film_5.jpg", tags: ["interiors"], order: { interiors: 9 } },
    { src: "media/Two Bunch Palms/240528_TwoBunch_477.jpg", tags: ["interiors"], order: { interiors: 10 } },
    { src: "media/20230723_GW_Effie_0087_edit.jpg", tags: ["interiors"], order: { interiors: 11 } },
    { src: "media/220830_GiaWolff_MagnoliaStudio_448.jpeg", tags: ["interiors"], order: { interiors: 12 } },
    { src: "media/Library_5_web.jpg", tags: ["interiors"], order: { interiors: 13 } },
    { src: "media/20230723_GW_Effie_0270.jpg", tags: ["interiors"], order: { interiors: 14 } },
    { src: "media/220606_GiaWolff_0269_edit.jpg", tags: ["interiors"], order: { interiors: 15 } },

    // LIFESTYLE SECTION
    { src: "media/250627_LizzyBday_006.jpg", tags: ["lifestyle"], order: { lifestyle: 1 } },
    { src: "media/Lifestyle/230128_Pets_MarLu_045.jpg", tags: ["lifestyle"], order: {  lifestyle: 2 } },
    { src: "media/250703_088.jpg", tags: ["lifestyle"], order: {  lifestyle: 3 } },
    { src: "media/Portraits/230504_LizzyIkebana_030.jpg", tags: ["lifestyle"], order: { lifestyle: 4 } },
    { src: "media/Lifestyle/220412_UrbanFarmsLA_0400.jpg", tags: ["lifestyle"], order: {  lifestyle: 5 } },
    { src: "media/Lifestyle/230128_Pets_MarLu_020.jpeg", tags: ["lifestyle"], order: {  lifestyle: 6 } },
    { src: "media/250824_Hawaii_252.jpg", tags: ["lifestyle"], order: {  lifestyle: 7 } },
    { src: "media/Lifestyle/241231_041.jpg", tags: ["lifestyle"], order: {  lifestyle: 8 } },
    { src: "media/Girls Trip/250729_512.jpg", tags: ["lifestyle"], order: {  lifestyle: 9 } },
    { src: "media/Girls Trip/250728_326.jpg", tags: ["lifestyle"], order: {  lifestyle: 10 } },
    { src: "media/Travel/019_KimLake.jpg", tags: ["lifestyle"], order: { lifestyle: 11 } },
    { src: "media/220412_UrbanFarmsLA_0049.jpg", tags: ["lifestyle"], order: { lifestyle: 12 } },
    { src: "media/Girls Trip/250727_220.jpg", tags: ["lifestyle"], order: { lifestyle: 13 } },
    { src: "media/Travel/MG_2774.jpg", tags: ["lifestyle"], order: { lifestyle: 14 } },
    { src: "media/Girls Trip/250727_162.jpg", tags: ["lifestyle"], order: { lifestyle: 15 } },

    // ALL GALLERY SECTION - Dedicated tag with its own order system
    { src: "media/250520_SungHolly_0358.jpg", tags: ["all"], order: { all: 1 } },
    { src: "media/250520_SungHolly_Roll1_022.jpg", tags: ["all"], order: { all: 2 } },
    { src: "media/221015_KaitCulmo_137_BW.jpeg", tags: ["all"], order: { all: 3 } },
    { src: "media/220507_Hawaii_148.jpeg", tags: ["all"], order: { all: 4 } },
    { src: "media/Trousdale.jpg", tags: ["all"], order: { all: 5 } },
    { src: "media/002.jpg", tags: ["all"], order: { all: 6 } },
    { src: "media/JulieHanse_238.jpg", tags: ["all"], order: { all: 7 } },
    { src: "media/230128_Pets_MarLu_020.jpeg", tags: ["all"], order: { all: 8 } },
    { src: "media/220329_SuedeJames_0300.jpg", tags: ["all"], order: { all: 9 } },
    { src: "media/221105_Zora_535.jpeg", tags: ["all"], order: { all: 10 } },
    { src: "media/240528_TwoBunch_827.jpg", tags: ["all"], order: { all: 11 } },
    { src: "media/Interiors/250910_114.jpg", tags: ["all"], order: { all: 12 } },
    { src: "media/20230723_GW_Effie_Film_14_edit.jpg", tags: ["all"], order: { all: 13 } },
    { src: "media/20230723_GW_Effie_0270.jpg", tags: ["all"], order: { all: 14 } },
    { src: "media/Library_5_web.jpg", tags: ["all"], order: { all: 15 } },
    { src: "media/Interiors/250910_092.jpg", tags: ["all"], order: { all: 16 } },
    { src: "media/Two Bunch Palms/240528_TwoBunch_549.jpg", tags: ["all"], order: { all: 17 } },
    { src: "media/Two Bunch Palms/240528_TwoBunch_219.jpg", tags: ["all"], order: { all: 18 } },
    { src: "media/220830_GiaWolff_MagnoliaStudio_448.jpeg", tags: ["all"], order: { all: 19 } },
    { src: "media/240528_TwoBunch_1350.jpg", tags: ["all"], order: { all: 20 } },
    { src: "media/20230723_GW_Effie_0087_edit.jpg", tags: ["all"], order: { all: 21 } },
    { src: "media/20230723_GW_Effie_Film_5.jpg", tags: ["all"], order: { all: 22 } },
    { src: "media/Two Bunch Palms/240528_TwoBunch_477.jpg", tags: ["all"], order: { all: 23 } },
    { src: "media/220606_GiaWolff_0269_edit.jpg", tags: ["all"], order: { all: 24 } },
    { src: "media/250627_LizzyBday_006.jpg", tags: ["all"], order: { all: 25 } },
    { src: "media/220412_UrbanFarmsLA_0245.jpg", tags: ["all"], order: { all: 26 } },
    { src: "media/250703_088.jpg", tags: ["all"], order: { all: 27 } },
    { src: "media/250824_Hawaii_252.jpg", tags: ["all"], order: { all: 28 } },
    { src: "media/250824_Hawaii_296.jpg", tags: ["all"], order: { all: 29 } },
    { src: "media/250703_051.jpg", tags: ["all"], order: { all: 30 } },
    { src: "media/R003251.jpg", tags: ["all"], order: { all: 31 } },
    { src: "media/250725_110.jpg", tags: ["all"], order: { all: 32 } },
    { src: "media/220412_UrbanFarmsLA_0049.jpg", tags: ["all"], order: { all: 33 } },
    { src: "media/Girls Trip/250727_220.jpg", tags: ["all"], order: { all: 34 } },
    { src: "media/Girls Trip/250729_512.jpg", tags: ["all"], order: { all: 35 } },
    { src: "media/Girls Trip/250728_326.jpg", tags: ["all"], order: { all: 36 } },
    { src: "media/Project_Las Vegas/161010_LasVegas_605.jpg", tags: ["all"], order: { all: 37 } },
  ]

// USAGE EXAMPLES:
// 
// 1. To automatically update all order numbers (run this after making changes):
//    updateAllOrders();
//
// 2. To move a specific image to a new position in a filter:
//    reorderFilter('portraits', 'media/250520_SungHolly_0358.jpg', 3); // Moves this image to position 3 in portraits
//    reorderFilter('all', 'media/250520_SungHolly_0358.jpg', 5); // Moves this image to position 5 in all gallery
//
// 3. To update order for just one filter:
//    updateOrderForFilter('all'); // Updates all "all" order numbers
//    updateOrderForFilter('portraits'); // Updates all "portraits" order numbers
//    updateOrderForFilter('interiors'); // Updates all "interiors" order numbers
//    updateOrderForFilter('living'); // Updates all "living" order numbers
//
// 4. To reorder any section, you can manually change the order values and then run:
//    updateOrderForFilter('all'); // For the "All" gallery section
//    updateOrderForFilter('portraits'); // For the "Portraits" section
//    etc.