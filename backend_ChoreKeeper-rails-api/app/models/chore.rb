class Chore < ApplicationRecord
    belongs_to :housemate
    validates :id, uniqueness: true
end
