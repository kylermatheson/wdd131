let count = 1;

function participantTemplate() {

    count++;  // Increment the count variable directly
    console.log(count);  // Log the updated value of count
    return`    
    <section class="participant${count}">
    <p>Participant ${count}</p>
    <div class="item">
      <label for="fname"> First Name<span>*</span></label>
      <input id="fname" type="text" name="fname" value="" required />
    </div>
    <div class="item activities">
      <label for="activity">Activity #<span>*</span></label>
      <input id="activity" type="text" name="activity" />
    </div>
    <div class="item">
      <label for="fee">Fee ($)<span>*</span></label>
      <input id="fee" type="number" name="fee" />
    </div>
    <div class="item">
      <label for="date">Desired Date <span>*</span></label>
      <input id="date" type="date" name="date" />
    </div>
    <div class="item">
      <p>Grade</p>
      <select>
        <option selected value="" disabled selected></option>
        <option value="1">1st</option>
        <option value="2">2nd</option>
        <option value="3">3rd</option>
        <option value="4">4th</option>
        <option value="5">5th</option>
        <option value="6">6th</option>
        <option value="7">7th</option>
        <option value="8">8th</option>
        <option value="9">9th</option>
        <option value="10">10th</option>
        <option value="11">11th</option>
        <option value="12">12th</option>
      </select>
    </div>
  </section>`

}

function submitForm(event) {
    event.preventDefault();

    const adultName = document.getElementById('adult_name').value;
    const numParticipants = count;
    const totalFee = totalFees();

    const summaryElement = document.getElementById('summary');
    summaryElement.innerHTML = `Thank you ${adultName} for registering. You have registered ${numParticipants} participants and owe $${totalFee} in fees.`;

    document.querySelector('.testbox form').style.display = "none";
    summaryElement.style.display = "block";
}


submit = document.getElementById("submitButton").addEventListener("click", submitForm)

function totalFees() {
    let feeElements = document.querySelectorAll("[id^=fee]");
    feeElements = [...feeElements];
    const total = feeElements.reduce((sum, el) => sum + Number(el.value), 0);
    return total;
}



document.getElementById("add").addEventListener("click", function () {
    const template = participantTemplate(count);
    document.getElementById("add").insertAdjacentHTML("beforebegin", template);
});





