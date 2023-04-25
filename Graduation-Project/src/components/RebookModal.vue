<template>
  <div
    
    id="rebook"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1
            class="modal-title fs-5"
            id="staticBackdropLabel"
            style="color: black"
          >
            Rebook
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body text-center" style="color: black">
          Are You sure You want to Rebook ?
          <br />
          <br />
          <label for="Date">Date</label>
          <input type="date" class="mx-2" />
          <label for="time">Time</label>
          <input type="time" class="mx-2" />
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary cancel-btn"
            data-bs-dismiss="modal"
          >
            Cancel
          </button>
          <button type="button" class="btn btn-primary main-btn">Book</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>

.cancel-btn{
  background-color: rgb(169, 11, 11);
  color: #fff;
  border-radius: 15px;
  height: 50px;
  font-weight: 500 !important;
  border:none;

}
</style>
