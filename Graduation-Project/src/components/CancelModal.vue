<template>
  <div
    class="modal fade"
    id="cancel"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1
            class="modal-title fs-5"
            id="exampleModalLabel"
            style="color: black"
          >
            Cancel
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body" style="color: black">
          Are you sure you want to cancel ?
        </div>
        <div class="modal-footer">
          <button type="button" class="btn cancel-btn" data-bs-dismiss="modal">
            Yes
          </button>
          <button type="button" class="btn main-btn" data-bs-dismiss="modal">
            No
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.icon {
  color: var(--darkblue);
}
.title {
  padding-top: 120px !important;
  margin-left: 90px !important;
  margin-right: 100px !important;
}
.card {
  background-color: var(--darkblue) !important;
  border-radius: 30px !important;
  /* width: 25rem !important; */
}
.card img {
  border-radius: 30px;
  width: 100%;
  height: 200px;
}
.cancel-btn{
  background-color: rgb(169, 11, 11);
  color: #fff;
  border-radius: 15px;
  height: 50px;
  font-weight: 500 !important;
  border:none;

}

</style>
