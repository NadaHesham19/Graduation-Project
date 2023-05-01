<template>
    <div class="searchsec container-fluid ">
      <i class="fa-solid fa-magnifying-glass search-icon"></i>
      <form class="d-flex searchform">
        <input
          class="form-control searchinput me-2"
          type="search"
          aria-label="Search"
        />
        <button
          class="btn btn-outline-success main-btn search-btn"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
</template>

<style>

/* start search section */
.searchinput {
  position: absolute !important;
  width: 416px !important;
  height: 55px !important;
  right: 22px !important;
  top: 150px !important;
  background: #d9d9d9 !important;
  border-radius: 50px !important;
  padding-left: 45px !important;
}
.search-btn {
  position: absolute !important;
  width: 110px !important;
  height: 55px !important;
  right: 336px !important;
  top: 150px !important;
  border-radius: 50px !important;
}
.search-icon {
  position: absolute;
  top: 170px;
  z-index: 1;
  right: 40px;
  color: var(--darkblue);
}
</style>