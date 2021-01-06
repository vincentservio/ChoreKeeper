class HousematesController < ApplicationController
  before_action :set_housemate, only: [:show, :update, :destroy]

  # GET /housemates
  def index
    housemates = Housemate.all
    render json: housemates
  end

  # GET /housemates/1
  def show
    render json: @housemate
  end

  # POST /housemates
  def create
    @housemate = Housemate.new(housemate_params)

    if @housemate.save
      render json: @housemate, status: :created, location: @housemate
    else
      render json: @housemate.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /housemates/1
  def update
    if @housemate.update(housemate_params)
      render json: @housemate
    else
      render json: @housemate.errors, status: :unprocessable_entity
    end
  end

  # DELETE /housemates/1
  def destroy
    @housemate.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_housemate
      @housemate = Housemate.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def housemate_params
      params.require(:housemate).permit(:name)
    end
end
